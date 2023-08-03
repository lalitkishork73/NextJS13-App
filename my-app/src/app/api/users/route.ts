import { NextResponse, NextRequest } from 'next/server';
import UserModel from '@/models/user';
import bcrypt from 'bcrypt';
import { Connect_Db } from '@/helper/db';
import { UserPost } from '@/validation/typemodel/type.model';
import { ErrStatusResponse, SuccesStatusResponse } from '@/helper/httpHelper';

//---> Data base Connection function
Connect_Db();

//---> Get all Users In DataBase

export async function GET() {
  try {
    const find_users = await UserModel.find().select({
      password: 0
    });
    if (find_users.length === 0) {
      return ErrStatusResponse(false, 'failed to find users', 404);
    }
    return SuccesStatusResponse(true, 'success', 200, find_users);
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}

//---> Create User In DataBase

export async function POST(req: NextRequest) {
  try {
    const data: UserPost = await req.json();

    if (!data) {
      return ErrStatusResponse(false, 'Bad Request', 400);
    }

    const CheckEmail = await UserModel.findOne({
      email: data.email
    });

    if (CheckEmail) {
      return ErrStatusResponse(false, 'This Email Id is already Exist', 400);
    }
    data.password = await bcrypt.hash(data.password, 15);
    const newData = await UserModel.create(data);
    return SuccesStatusResponse(true, 'success', 201, newData);
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}
