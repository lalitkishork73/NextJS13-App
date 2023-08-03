import { NextRequest, NextResponse } from 'next/server';
import TaskModel from '@/models/task';
import { ErrStatusResponse, SuccesStatusResponse } from '@/helper/httpHelper';

//-----> Get user's Task

export async function GET(
  req: NextRequest,
  { params }: { params: { taskId: string } }
) {
  try {
    const { taskId } = params;
    const getTask = await TaskModel.findById(taskId);
    if (getTask.length === 0) {
      return ErrStatusResponse(false, 'Not Found', 404);
    }
    return SuccesStatusResponse(true, 'Success', 200, getTask);
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}

//-----> Update User's Task

export async function PUT(
  req: NextRequest,
  { params }: { params: { taskId: string } }
) {
  try {
    const { taskId } = params;
    const data = await req.json();
    const updateTask = await TaskModel.findOneAndUpdate(
      { _id: taskId },
      { $set: data },
      { new: true }
    );
    if (!updateTask) {
      return ErrStatusResponse(false, 'Not Found task ', 404);
    }
    return SuccesStatusResponse(true, 'Success', 200, updateTask);
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}

//-----> Delete user's Task

export async function DELETE(
  req: NextRequest,
  { params }: { params: { taskId: string } }
) {
  try {
    const { taskId } = params;
    const removeTask = await TaskModel.deleteOne({ _id: taskId });
    if (!removeTask) {
      return ErrStatusResponse(false, 'Not Found', 404);
    }
    return SuccesStatusResponse(true, 'Success', 200);
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}
