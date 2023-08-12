import {
  ErrStatusResponse,
  SuccesStatusResponse
} from '@/helper/responseMessage';
import Taskmodel from '@/models/task';
import { Params } from '@/validation/typemodel/type.model';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: Params }) {
  try {
    const { userId } = params;
    // console.log(userId);
    const findTask = await Taskmodel.find({ userId: userId });
    return NextResponse.json(findTask);
  } catch (err: any) {
    ErrStatusResponse(false, err.message, 500);
  }
}
