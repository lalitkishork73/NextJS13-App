import { NextResponse, NextRequest } from 'next/server';
import UserModel from '@/models/user';
import { Params } from '@/validation/typemodel/type.model';
import bcrypt from 'bcrypt';

// -----> Get Indivisual User By UserId

export async function GET(
  req: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { userId } = params;
    const allUser = await UserModel.findById({ _id: userId });
    if (!allUser) {
      return NextResponse.json(
        {
          status: false,
          message: 'User Not Found'
        },
        {
          status: 404
        }
      );
    }
    return NextResponse.json(
      {
        status: true,
        message: 'Success!',
        data: allUser
      },
      {
        status: 200
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        status: false,
        message: err.message
      },
      {
        status: 500
      }
    );
  }
}

// -----> Delete Indivisual User By UserId

export async function DELETE(
  req: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { userId } = params;
    const deleteUser = await UserModel.deleteOne({
      _id: userId
    });

    if (!deleteUser) {
      return NextResponse.json(
        {
          status: false,
          message: 'User Already Delete or Not exist'
        },
        {
          status: 404
        }
      );
    }
    return NextResponse.json(
      {
        status: true,
        message: 'User Successfully deleted'
      },
      {
        status: 200
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        status: false,
        message: err.message
      },
      {
        status: 500
      }
    );
  }
}

// -----> Update User Details

export async function PUT(
  req: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { userId } = params;
    const data = await req.json();

    data.password = await bcrypt.hash(data.password, 15);

    const UpdateUser = await UserModel.findOneAndUpdate(
      {
        _id: userId
      },
      { $set: data },
      { new: true }
    );
    if (!UpdateUser) {
      return NextResponse.json(
        {
          status: false,
          message: 'User Not Found for update'
        },
        {
          status: 404
        }
      );
    }

    return NextResponse.json(
      {
        status: true,
        message: 'Succeess!',
        data: UpdateUser
      },
      {
        status: 201
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        status: false,
        message: err.message
      },
      {
        status: 500
      }
    );
  }
}
