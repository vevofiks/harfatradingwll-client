// app/api/categories/add/route.ts
import { dbConnect } from '@/lib/db';
import { verifyToken } from '@/lib/paseto';
import categoryModel from '@/model./category.model';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  await dbConnect();
  const token = req.headers.get('authorization')?.split(' ')[1];
  const payload = token ? await verifyToken(token) : null;

  if (!payload || payload.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { name } = await req.json();
  const category = new categoryModel({ name });
  await category.save();
  return NextResponse.json(category, { status: 201 });
}