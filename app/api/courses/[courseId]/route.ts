// app/api/courses/[id]/route.ts
import { NextResponse } from 'next/server';
import db from '@/db/drizzle';
import { courses } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

function parseId(idParam: string) {
  const id = Number(idParam);
  if (Number.isNaN(id)) throw new Error('Invalid id');
  return id;
}

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const id = parseId(params.id);
  const [record] = await db.select().from(courses).where(eq(courses.id, id)).limit(1);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = parseId(params.id);
  const body = await req.json();
  const toUpdate = {
    title: body.title,
    imageSrc: body.imageSrc
  };
  const [updated] = await db.update(courses).set(toUpdate).where(eq(courses.id, id)).returning();
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const id = parseId(params.id);
  const [deleted] = await db.delete(courses).where(eq(courses.id, id)).returning();
  if (!deleted) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(deleted);
}
