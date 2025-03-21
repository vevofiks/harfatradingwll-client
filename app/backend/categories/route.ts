// app/api/categories/route.ts
import { NextRequest, NextResponse } from 'next/server';

import { verifyToken } from '@/lib/paseto';
import { dbConnect } from '@/lib/db';
import categoryModel from '@/model./category.model';

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