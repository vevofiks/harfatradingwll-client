// app/api/products/add/route.ts
import { NextRequest, NextResponse } from 'next/server';

import { verifyToken } from '@/lib/paseto';
import { dbConnect } from '@/lib/db';
import productModel from '@/model./product.model';

export async function POST(req: NextRequest) {
  await dbConnect();
  const token = req.headers.get('authorization')?.split(' ')[1];
  const payload = token ? await verifyToken(token) : null;

  if (!payload || payload.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { name, price, category } = await req.json();
  const product = new productModel({ name, price, category });
  await product.save();
  return NextResponse.json(product, { status: 201 });
}