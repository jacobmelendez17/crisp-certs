import { NextResponse } from "next/server";
import db from "@/db/drizzle";
import { challenge_options } from "@/db/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async () => {
  if (!(await isAdmin())) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const data = await db.query.challenge_options.findMany();
  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  if (!(await isAdmin())) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

    if (!isAdmin()) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const data = await db.insert(challenge_options).values({
      ...body,
    }).returning();

    return NextResponse.json(data[0]);
};
