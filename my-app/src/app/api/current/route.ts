import jwt from 'jsonwebtoken';
import userModel from '@/models/user';
import { NextRequest } from 'next/server';
import { ErrStatusResponse } from '@/helper/httpHelper';

export async function GET(req: NextRequest) {
  try {
    const authToken = req.cookies.get('authToken')?.value;
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}
