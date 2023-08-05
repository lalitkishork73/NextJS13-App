import jwt from 'jsonwebtoken';
import userModel from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import { ErrStatusResponse } from '@/helper/responseMessage';

export async function GET(req: NextRequest) {
  try {
    const authToken: any = req.cookies.get('authToken')?.value;
    const data: any = jwt.verify(authToken, 'secretkey');
    const user = await userModel.findById(data._id).select('-password');
    return NextResponse.json(user);
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}
