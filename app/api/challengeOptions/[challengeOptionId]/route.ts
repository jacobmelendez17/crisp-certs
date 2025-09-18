import db from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { challenge_options } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { NextResponse } from "next/server";

export const GET = async (
    req: Request,
    { params }: { params: { challengeOptionId: number } },
) => {
    if (!isAdmin()) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const data = await db.query.challenge_options.findFirst({
        where: eq(challenge_options.id, params.challengeOptionId),
    });

    return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params }: { params: { challengeOptionId: number } },
) => {
    if (!isAdmin()) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const body = await req.json();
    const data = await db.update(challenge_options).set({
        ...body,
    }).where(eq(challenge_options.id, params.challengeOptionId)).returning();

    return NextResponse.json(data);
};

export const DELETE = async (
    req: Request,
    { params }: { params: { challengeOptionId: number } },
) => {
    if (!isAdmin()) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const data = await db.delete(challenge_options).where(eq(challenge_options.id, params.challengeOptionId)).returning();

    return NextResponse.json(data);
}