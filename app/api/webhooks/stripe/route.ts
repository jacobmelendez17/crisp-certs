// app/api/webhooks/stripe/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import db from "@/db/drizzle";
import { userSubscription } from "@/db/schema";
import { eq } from "drizzle-orm";

export const runtime = "nodejs";

/** Unwraps either T or Stripe.Response<T> to always return T. */
function unwrapStripe<T>(obj: T | Stripe.Response<T>): T {
  return (obj as any)?.data ?? (obj as T);
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
  } catch (error: any) {
    return new NextResponse(`Webhook error: ${error.message}`, { status: 400 });
  }

  // 1) Initial purchase
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (!session?.metadata?.userId) {
      return new NextResponse("User ID is required", { status: 400 });
    }

    const subResp = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    const subscription = unwrapStripe<Stripe.Subscription>(subResp);

    const currentPeriodEnd =
      (subscription as any)["current_period_end"] as number | undefined;

    await db.insert(userSubscription).values({
      userId: session.metadata.userId,
      stripeSubscriptionId: subscription.id,
      stripeCustomerId: subscription.customer as string,
      stripePriceId: subscription.items.data[0]?.price?.id ?? null,
      stripeCurrentPeriodEnd: new Date((currentPeriodEnd ?? 0) * 1000),
    });

    return new NextResponse(null, { status: 200 });
  }

  if (event.type === "invoice.payment_succeeded") {
  const invoice = event.data.object as Stripe.Invoice;

  // TS-safe extraction even if ambient types don't show `subscription`
  const subscriptionId =
    (invoice as any)["subscription"] ??
    invoice.lines?.data?.[0]?.subscription ??
    null;

  if (!subscriptionId) {
    return new NextResponse(null, { status: 200 });
  }

  const subResp = await stripe.subscriptions.retrieve(subscriptionId as string);
  const subscription = unwrapStripe<Stripe.Subscription>(subResp);

  const priceId = subscription.items.data[0]?.price?.id ?? null;
  const currentPeriodEnd =
    (subscription as any)["current_period_end"] as number | undefined;

  await db
    .update(userSubscription)
    .set({
      stripePriceId: priceId,
      stripeCurrentPeriodEnd: new Date((currentPeriodEnd ?? 0) * 1000),
    })
    .where(eq(userSubscription.stripeSubscriptionId, subscription.id));

  return new NextResponse(null, { status: 200 });
}


  // (Optional) You can also handle cancellation/downgrade:
  // - customer.subscription.deleted
  // - customer.subscription.updated

  return new NextResponse(null, { status: 200 });
}
