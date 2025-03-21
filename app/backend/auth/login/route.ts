import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/paseto';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username !== adminUsername || password !== adminPassword) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  try {
    const token = await generateToken({ role: 'admin', username });
    console.log('token in login api',token)
    const tokenParts = token.split('.');
const payloadBase64 = tokenParts[1];
const payloadDecoded = Buffer.from(payloadBase64, 'base64').toString('utf8');
console.log('Decoded payload:', payloadDecoded);
    return NextResponse.json({ token });
  } catch (error) {
    console.error('Failed to create token:', error);
    return NextResponse.json({ message: 'Token creation failed' }, { status: 500 });
  }
}
