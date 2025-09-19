// app/api/courses/route.ts
import { NextResponse } from 'next/server';
import db from '@/db/drizzle';
import { courses } from '@/db/schema';
import { asc, desc, eq, sql } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

// Helper: parse RA query params
function parseParams(searchParams: URLSearchParams) {
  const sort = JSON.parse(searchParams.get('sort') ?? '["id","ASC"]') as [string, "ASC"|"DESC"];
  const range = JSON.parse(searchParams.get('range') ?? '[0,9]') as [number, number];
  const filter = JSON.parse(searchParams.get('filter') ?? '{}') as Record<string, unknown>;
  return { sort, range, filter };
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const { sort, range } = parseParams(url.searchParams);
  const [sortField, sortOrder] = sort;
  const [start, end] = range;
  const limit = end - start + 1;
  const offset = start;

  const orderBy = sortOrder === 'ASC' ? asc((courses as any)[sortField]) : desc((courses as any)[sortField]);

  const [items, [{ count }]] = await Promise.all([
    db.select().from(courses).orderBy(orderBy).limit(limit).offset(offset),
    db.select({ count: sql<number>`count(*)` }).from(courses)
  ]);

  const res = NextResponse.json(items);
  res.headers.set('Content-Range', `courses ${start}-${start + items.length - 1}/${count}`);
  res.headers.set('Access-Control-Expose-Headers', 'Content-Range');
  return res;
}

export async function POST(req: Request) {
  const body = await req.json();
  // Only allow fields the table supports
  const toInsert = {
    title: body.title,
    imageSrc: body.imageSrc
  };
  const [created] = await db.insert(courses).values(toInsert).returning();
  return NextResponse.json(created, { status: 201 });
}
