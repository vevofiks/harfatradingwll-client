// lib/paseto.ts
import { V4 } from 'paseto';
import { Buffer } from 'node:buffer';

// Instantiate V4

const privateKey = (() => {
  const key = process.env.PASETO_PRIVATE_KEY;
  if (!key) throw new Error('PASETO_PRIVATE_KEY is missing from environment variables');
  console.log('Private Key:', key, 'Length (chars):', key.length);
  const buffer = Buffer.from(key, 'base64');
  if (buffer.length !== 64) {
    console.error(`Private key length is ${buffer.length}, expected 64 bytes`);
    throw new Error('Invalid PASETO_PRIVATE_KEY length');
  }
  return buffer;
})();

const publicKey = (() => {
  const key = process.env.PASETO_PUBLIC_KEY;
  if (!key) throw new Error('PASETO_PUBLIC_KEY is missing from environment variables');
  console.log('Public Key:', key, 'Length (chars):', key.length);
  const buffer = Buffer.from(key, 'base64');
  if (buffer.length !== 32) {
    console.error(`Public key length is ${buffer.length}, expected 32 bytes`);
    throw new Error('Invalid PASETO_PUBLIC_KEY length');
  }
  return buffer;
})();

interface TokenPayload {
  role: string;
  username: string;
  iat?:Date;
  exp?:Date;
  iss?:string;
  sub?:string
}

export async function generateToken(payload: TokenPayload): Promise<string> {
  try {
    const payloadObject: Record<string, unknown> = { ...payload };
    console.log('ypayload object',payloadObject)
    return await V4.sign(payloadObject, privateKey, {
      expiresIn: '1h',
      audience: 'http://localhost:3000',
      issuer: 'http://localhost:3000/backend',
      subject: payload.username,
    });
  } catch (error) {
    console.error('Failed to generate PASETO token:', error);
    throw new Error('Token generation failed');
  }
}

export async function verifyToken(token: string): Promise<TokenPayload | null> {
    try {
      console.log('Verifying token:', token);
      const verified = await V4.verify(token, publicKey, {
        audience: 'http://localhost:3000',
        issuer: 'http://localhost:3000/backend',
      });
  
      console.log('Verified payload:', verified);
      return verified as unknown as TokenPayload
    } catch (error) {
      console.warn('Failed to verify PASETO token:', error);
      return null;
    }
  }
  
