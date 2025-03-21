import { generateToken } from '@/lib/paseto';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username !== adminUsername || password !== adminPassword) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const token = await generateToken({ role: 'admin', username });
  return NextResponse.json({ token });
}