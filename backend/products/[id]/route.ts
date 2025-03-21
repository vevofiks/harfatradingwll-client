// app/api/products/[id]/route.ts
import { dbConnect } from '@/lib/db';
import { verifyToken } from '@/lib/paseto';
import productModel from '@/model./product.model';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const token = req.headers.get('authorization')?.split(' ')[1];
  const payload = token ? await verifyToken(token) : null;

  if (!payload || payload.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { id } = params;
  const product = await productModel.findById(id);
  if (!product) return NextResponse.json({ message: 'Product not found' }, { status: 404 });

  const { name, price, category, isBlocked } = await req.json();
  product.name = name || product.name;
  product.price = price || product.price;
  product.category = category || product.category;
  product.isBlocked = isBlocked !== undefined ? isBlocked : product.isBlocked;
  await product.save();
  return NextResponse.json(product);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const token = req.headers.get('authorization')?.split(' ')[1];
  const payload = token ? await verifyToken(token) : null;

  if (!payload || payload.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { id } = params;
  await productModel.findByIdAndDelete(id);
  return new NextResponse(null, { status: 204 });
}