// app/api/categories/add/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/paseto';
import { dbConnect } from '@/lib/db';
import categoryModel from '@/model./category.model';

export async function POST(req: NextRequest) {
  await dbConnect();
  console.log('reques',req.headers)
  const token = req.headers.get('authorization')?.split(' ')[1];
  console.log('token',token)
  const payload = token ? await verifyToken(token) : null;

  console.log('payled',payload)

  if (!payload || payload.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { name } = await req.json();
  const category = new categoryModel({ name });
  await category.save();
  return NextResponse.json(category, { status: 201 });
}