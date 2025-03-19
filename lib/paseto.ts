import { V4 } from '@paseto/js';

const secretKey = Buffer.from(process.env.PASETO_SECRET!, 'base64'); 
const paseto = new V4();

interface TokenPayload {
  role: string;
  username: string;
}

export async function generateToken(payload: TokenPayload): Promise<string> {
  return await paseto.encrypt(payload, secretKey, {
    expiresIn: '1h',
  });
}

export async function verifyToken(token: string): Promise<TokenPayload | null> {
  try {
    const decrypted = await paseto.decrypt(token, secretKey);
    return decrypted as TokenPayload;
  } catch (error) {
    return null;
  }
}