import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const name = process.env.SESSION_COOKIE_NAME || '__session';
  const isPrivate = req.nextUrl.pathname.startsWith('/area') || req.nextUrl.pathname.startsWith('/profissional');
  if (!isPrivate) return NextResponse.next();

  const cookie = req.cookies.get(name)?.value;
  if (!cookie) {
    const url = new URL('/login', req.url);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/area/:path*','/profissional/:path*']
};
