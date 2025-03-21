// app/api/categories/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/paseto';
import { dbConnect } from '@/lib/db';
import categoryModel from '@/model./category.model';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const token = req.headers.get('authorization')?.split(' ')[1];
  const payload = token ? await verifyToken(token) : null;

  if (!payload || payload.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { id } = params;
  const category = await categoryModel.findById(id);
  if (!category) return NextResponse.json({ message: 'Category not found' }, { status: 404 });

  const { name, isBlocked } = await req.json();
  category.name = name || category.name;
  category.isBlocked = isBlocked !== undefined ? isBlocked : category.isBlocked;
  await category.save();
  return NextResponse.json(category);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const token = req.headers.get('authorization')?.split(' ')[1];
  const payload = token ? await verifyToken(token) : null;

  if (!payload || payload.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { id } = params;
  await categoryModel.findByIdAndDelete(id);
  return new NextResponse(null, { status: 204 });
}