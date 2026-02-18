import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow timetable page, static assets, and Next.js internals through
  if (
    pathname === '/timetable' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files (images, fonts, etc.)
  ) {
    return NextResponse.next();
  }

  // Rewrite everything else to root (keeps URL clean)
  const url = request.nextUrl.clone();
  url.pathname = '/';
  return NextResponse.rewrite(url);
}
