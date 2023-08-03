import { NextRequest } from 'next/server';
import { ErrStatusResponse, SuccesStatusResponse } from '@/helper/httpHelper';

export async function POST(req: NextRequest) {
  try {
    const response = SuccesStatusResponse(true, 'Logged Out!', 200);
    response.cookies.set('authToken', '', { expires: new Date(0) });
    return response;
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}
