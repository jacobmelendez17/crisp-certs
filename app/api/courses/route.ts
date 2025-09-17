// app/api/courses/route.ts
import { NextResponse } from "next/server";
import db from "@/db/drizzle";
import { courses } from "@/db/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async () => {
  if (!(await isAdmin())) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const data = await db.query.courses.findMany();
  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  if (!(await isAdmin())) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const body = await req.json();
    // pick only allowed fields to avoid shape mismatches
    const { title, imageSrc } = body as { title: string; imageSrc: string };

    const [row] = await db
      .insert(courses)
      .values({ title, imageSrc })
      .returning();

    return NextResponse.json(row);
  } catch (err: any) {
    console.error("Create course failed:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
