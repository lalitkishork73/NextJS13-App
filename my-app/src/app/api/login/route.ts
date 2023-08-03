import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userModel from '@/models/user';
import { NextRequest } from 'next/server';
import { ErrStatusResponse, SuccesStatusResponse } from '@/helper/httpHelper';

// -----> Login User
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    if (!data.email && !data.password) {
      ErrStatusResponse(false, 'Please Provide Email & Password', 400);
    }

    //-----> Check user exist or not
    const UserExist = await userModel.findOne({ email: data.email });
    if (!UserExist) {
      ErrStatusResponse(false, 'This Email Id is Not Registered', 404);
    }

    //-----> Match encypted and actual password
    const passMatch = await bcrypt.compare(data.password, UserExist.password);
    if (!passMatch) {
      ErrStatusResponse(false, 'Incorrect Password!', 401);
    }

    //-----> generate Token
    const token = jwt.sign(
      { _id: UserExist._id, name: UserExist.name },
      'secretkey'
    );

    const response = SuccesStatusResponse(
      true,
      'Login Success',
      200,
      UserExist.name
    );

    //-----> Set token in cookies
    const validSession = 1000 * 60 * 60 * 24 * 2;
    response.cookies.set('authToken', token, {
      expires: validSession,
      httpOnly: true
    });
    return response;
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}
