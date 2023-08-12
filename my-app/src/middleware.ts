import { NextRequest, NextResponse } from 'next/server';
import {
  ErrStatusResponse,
  SuccesStatusResponse
} from '@/helper/responseMessage';

import { Connect_Db } from '@/helper/db';
export async function middleware(req: NextRequest) {
  // Connect_Db();
  const authToken = req.cookies.get('authToken')?.value;

  if (
    req.nextUrl.pathname === '/api/login' ||
    req.nextUrl.pathname === '/api/users' ||
    req.nextUrl.pathname === '/'
  ) {
    return;
  }

  const loggedInUserNotAccessPaths =
    req.nextUrl.pathname === '/login' || req.nextUrl.pathname == '/signup';

  if (loggedInUserNotAccessPaths) {
    // access not secured route
    if (authToken) {
      return NextResponse.redirect(new URL('/profile/user', req.url));
    }
  } else {
    // accessing secured route

    if (!authToken) {
      if (req.nextUrl.pathname.startsWith('/api')) {
        return ErrStatusResponse(false, 'Access Denied !!', 401);
      }

      return NextResponse.redirect(new URL('/login', req.url));
    } else {
      // varify...
    }
  }
}
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/add-task',
    '/show-tasks',
    '/profile/:path*',
    '/api/:path*'
  ]
};
