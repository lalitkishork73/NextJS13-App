import { NextRequest, NextResponse } from 'next/server';
import TaskModel from '@/models/task';
import {
  ErrStatusResponse,
  SuccesStatusResponse
} from '@/helper/responseMessage';

//-----> Create all Tasks
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const CreateTask = await TaskModel.create(data);
    return SuccesStatusResponse(true, 'Success!', 201, CreateTask);
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}
//-----> Get all Tasks

export async function GET(req: NextRequest) {
  try {
    const allTask = await TaskModel.find();
    if (allTask.length === 0) {
      return ErrStatusResponse(false, 'Not Found', 404);
    }
    return SuccesStatusResponse(true, 'Success!', 200, allTask);
  } catch (err: any) {
    return ErrStatusResponse(false, err.message, 500);
  }
}
