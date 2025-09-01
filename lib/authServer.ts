import { cookies } from 'next/headers';
import { adminAuth } from '@/lib/firebase/admin';
import type { DecodedIdToken } from 'firebase-admin/auth';

export type Session = { uid: string; role?: string | null; token: DecodedIdToken };

export async function getSession(): Promise<Session | null> {
  const name = process.env.SESSION_COOKIE_NAME || '__session';
  const cookie = cookies().get(name)?.value;
  if (!cookie) return null;
  try {
    const decoded = await adminAuth.verifySessionCookie(cookie, true);
    const role = (decoded as any).role ?? null;
    return { uid: decoded.uid, role, token: decoded };
  } catch {
    return null;
  }
}

export function requireRole(session: Session | null, roles: Array<string>): asserts session {
  if (!session || (roles.length && !roles.includes(session.role || ''))) {
    // Throwing causes redirect in server components if caught.
    throw new Error('forbidden');
  }
}
