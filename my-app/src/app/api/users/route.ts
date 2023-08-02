import { NextResponse, NextRequest } from 'next/server';
import UserModel from '@/models/user';
import bcrypt from 'bcrypt';
import { Connect_Db } from '@/helper/db';

Connect_Db();
import { UserPost } from '@/validation/typemodel/type.model';

export async function POST(req: NextRequest) {
  try {
    const data: UserPost = await req.json();
    console.log(data.name);
    if (!data) {
      return NextResponse.json({
        status: false,
        message: 'data should available'
      });
    }

    const CheckEmail = await UserModel.findOne({
      email: data.email
    });
    console.log(CheckEmail);
    if (CheckEmail) {
      return NextResponse.json({
        status: false,
        message: 'This Email Id is already Exist'
      });
    }
    data.password = bcrypt.hashSync(data.password, 15);
    const newData = await UserModel.create(data);
    return NextResponse.json({
      status: true,
      message: 'Success!',
      data: newData
    });
  } catch (err) {
    return NextResponse.json({ err });
  }
}
