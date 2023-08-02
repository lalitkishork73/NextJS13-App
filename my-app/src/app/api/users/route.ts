import { NextResponse, NextRequest } from 'next/server';
import UserModel from '@/models/user';
import bcrypt from 'bcrypt';
import { Connect_Db } from '@/helper/db';
import { UserPost } from '@/validation/typemodel/type.model';

//---> Data base Connection function
Connect_Db();

//---> Get all Users In DataBase

export async function GET() {
  try {
    const find_users = await UserModel.find().select({
      password: 0
    });
    if (find_users.length === 0) {
      return NextResponse.json(
        {
          message: 'failed to find users',
          status: false
        },
        {
          status: 404
        }
      );
    }
    return NextResponse.json(
      {
        message: 'success!',
        status: true,
        data: find_users
      },
      {
        status: 200
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: 'failed to find users',
        status: false
      },
      {
        status: 500
      }
    );
  }
}

//---> Create User In DataBase

export async function POST(req: NextRequest) {
  try {
    const data: UserPost = await req.json();

    if (!data) {
      return NextResponse.json({
        status: false,
        message: 'data should available'
      });
    }

    const CheckEmail = await UserModel.findOne({
      email: data.email
    });

    if (CheckEmail) {
      return NextResponse.json({
        status: false,
        message: 'This Email Id is already Exist'
      });
    }
    data.password = await bcrypt.hash(data.password, 15);
    const newData = await UserModel.create(data);
    return NextResponse.json(
      {
        status: true,
        message: 'Success!',
        data: newData
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: `${err}`,
        status: false
      },
      {
        status: 500
      }
    );
  }
}
