import { NextRequest } from 'next/server';
import {
  ErrStatusResponse,
  SuccesStatusResponse
} from '@/helper/responseMessage';

export async function POST(req: NextRequest) {
  try {
    const response = SuccesStatusResponse(true, 'Logged Out!', 200);
    const validatione: number = Date.now();
    // console.log('Logout working');
    response.cookies.set('authToken', '', { maxAge: 0 });
    return response;
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}
