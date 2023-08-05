import { NextResponse, NextRequest } from 'next/server';
import UserModel from '@/models/user';
import { Params } from '@/validation/typemodel/type.model';
import bcrypt from 'bcrypt';
import { ErrStatusResponse, SuccesStatusResponse } from '@/helper/responseMessage';

// -----> Get Indivisual User By UserId

export async function GET(req: NextRequest, { params }: { params: Params }) {
  try {
    const { userId } = params;
    const allUser = await UserModel.findById({ _id: userId });
    if (!allUser) {
      return ErrStatusResponse(false, 'User Not Found', 404);
    }
    return SuccesStatusResponse(true, 'Success', 200, allUser);
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}

// -----> Delete Indivisual User By UserId

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  try {
    const { userId } = params;
    const deleteUser = await UserModel.deleteOne({
      _id: userId
    });

    if (!deleteUser) {
      return ErrStatusResponse(false, 'User Already Delete or Not exist', 404);
    }
    return SuccesStatusResponse(true, 'User Successfully deleted', 200);
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}

// -----> Update User Details

export async function PUT(req: NextRequest, { params }: { params: Params }) {
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
      return ErrStatusResponse(false, 'User Not Found for update', 404);
    }
    return SuccesStatusResponse(true, 'Success', 201, UpdateUser);
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}
