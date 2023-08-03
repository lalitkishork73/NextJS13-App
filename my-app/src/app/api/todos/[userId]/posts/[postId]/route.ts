import { NextRequest, NextResponse } from 'next/server';

export function GET(
  req: NextRequest,
  { params }: { params: { userId: string; postId: string } }
) {
  return NextResponse.json(params);
}
