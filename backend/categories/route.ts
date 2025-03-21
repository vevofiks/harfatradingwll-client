// app/api/categories/route.ts
import { dbConnect } from '@/lib/db';
import { verifyToken } from '@/lib/paseto';
import categoryModel from '@/model./category.model';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  await dbConnect();
  const token = req.headers.get('authorization')?.split(' ')[1];
  const payload = token ? await verifyToken(token) : null;

  if (!payload || payload.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const categories = await categoryModel.find();
  return NextResponse.json(categories);
}