import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase/admin';

export async function POST(req: NextRequest) {
  const { idToken } = await req.json();
  if (!idToken) return NextResponse.json({ error: 'missing token' }, { status: 400 });

  const decoded = await adminAuth.verifyIdToken(idToken, true);
  const expiresDays = Number(process.env.SESSION_EXPIRES_DAYS || 5);
  const expiresIn = 1000 * 60 * 60 * 24 * expiresDays;

  const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });
  const name = process.env.SESSION_COOKIE_NAME || '__session';

  cookies().set({
    name,
    value: sessionCookie,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: expiresIn / 1000,
  });

  return NextResponse.json({ ok: true, uid: decoded.uid, role: (decoded as any).role ?? null });
}

export async function DELETE() {
  const name = process.env.SESSION_COOKIE_NAME || '__session';
  cookies().set({ name, value: '', httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 0 });
  return NextResponse.json({ ok: true });
}
