import jwt from 'jsonwebtoken';
import userModel from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import { ErrStatusResponse } from '@/helper/responseMessage';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  try {
    console.log(req.cookies, 'token');
    const cookieStore = cookies();
    const theme = cookieStore.getAll( );
    // console.log(theme);
    const authToken: any = req.cookies.get('authToken')?.value;
    // console.log(authToken);
    const data: any = jwt.verify(authToken, 'secretkey');
    const user = await userModel.findById(data._id).select('-password');
    return NextResponse.json(user);
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}
