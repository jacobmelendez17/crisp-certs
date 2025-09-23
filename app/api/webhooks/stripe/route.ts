// app/api/webhooks/stripe/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import db from "@/db/drizzle";
import { userSubscription } from "@/db/schema";
import { eq } from "drizzle-orm";

export const runtime = "nodejs";

/**
 * In modern stripe-node, Stripe.Response<T> is effectively `T & { lastResponse: ... }`.
 * We can "unwrap" by narrowing away the extra property at the type level (no `.data` access).
 */
function unwrapStripe<T>(obj: T | (T & { lastResponse: unknown })): T {
  return obj as T;
}

/** Guard: primitive string check */
function isString(x: unknown): x is string {
  return typeof x === "string";
}

/** Guard: object with string-ish `id` */
type WithId = { id?: unknown };
function hasIdString(x: unknown): x is WithId {
  return !!x && typeof (x as WithId).id === "string";
}

/**
 * Safely extract a subscription id from an Invoice across SDK versions.
 * Avoids direct property access that might be missing in your local typings.
 */
function getSubscriptionIdFromInvoice(invoice: Stripe.Invoice): string | null {
  const inv = invoice as unknown as {
    subscription?: unknown;
    lines?: { data?: Array<{ subscription?: unknown }> };
  };

  const s = inv.subscription;
  if (isString(s)) return s;
  if (hasIdString(s)) return String((s as WithId).id);

  const line = inv.lines?.data?.[0];
  const ls = line?.subscription;
  if (isString(ls)) return ls;
  if (hasIdString(ls)) return String((ls as WithId).id);

  return null;
}

/**
 * Some older/local Stripe typings may not expose `current_period_end`.
 * Use a structural check so we stay type-safe without `any`.
 */
function getCurrentPeriodEnd(sub: Stripe.Subscription): number {
  const maybe = sub as unknown as { current_period_end?: unknown };
  if (typeof maybe.current_period_end === "number") {
    return maybe.current_period_end;
  }
  throw new Error(
    "Stripe Subscription is missing current_period_end on this SDK version."
  );
}

export async function POST(req: Request) {
  const signature = req.headers.get("Stripe-Signature") ?? "";
  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new NextResponse(`Webhook error: ${message}`, { status: 400 });
  }

  // === Initial purchase ===
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const userId = session.metadata?.userId;
    if (!userId) {
      return new NextResponse("User ID is required", { status: 400 });
    }

    // session.subscription: string | Subscription | null
    const subscriptionId =
      typeof session.subscription === "string"
        ? session.subscription
        : session.subscription?.id;

    if (!subscriptionId) {
      return new NextResponse("Subscription ID missing on session", { status: 400 });
    }

    const raw = await stripe.subscriptions.retrieve(subscriptionId);
    const subscription = unwrapStripe<Stripe.Subscription>(raw);

    await db.insert(userSubscription).values({
      userId,
      stripeSubscriptionId: subscription.id,
      stripeCustomerId: String(subscription.customer),
      stripePriceId: subscription.items.data[0]?.price?.id ?? null,
      stripeCurrentPeriodEnd: new Date(getCurrentPeriodEnd(subscription) * 1000),
    });

    return new NextResponse(null, { status: 200 });
  }

  // === Recurring payment succeeded (renewal) ===
  if (event.type === "invoice.payment_succeeded") {
    const invoice = event.data.object as Stripe.Invoice;

    const subscriptionId = getSubscriptionIdFromInvoice(invoice);
    if (!subscriptionId) {
      // Nothing to update; acknowledge so Stripe doesn't retry
      return new NextResponse(null, { status: 200 });
    }

    const raw = await stripe.subscriptions.retrieve(subscriptionId);
    const subscription = unwrapStripe<Stripe.Subscription>(raw);

    await db
      .update(userSubscription)
      .set({
        stripePriceId: subscription.items.data[0]?.price?.id ?? null,
        stripeCurrentPeriodEnd: new Date(getCurrentPeriodEnd(subscription) * 1000),
      })
      .where(eq(userSubscription.stripeSubscriptionId, subscription.id));

    return new NextResponse(null, { status: 200 });
  }

  // For other event types, acknowledge OK to avoid retries
  return new NextResponse(null, { status: 200 });
}
