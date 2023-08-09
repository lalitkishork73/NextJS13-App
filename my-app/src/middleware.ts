import { NextRequest, NextResponse } from 'next/server';
export function middleware(req: NextRequest) {
  const authToken = req.cookies.get('authToken')?.value;
  // console.log(authToken,"middle");
}
