import { NextRequest, NextResponse } from 'next/server';
import TaskModel from '@/models/task';

//-----> Create all Tasks
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const date = new Date();
    data['addedDate'] = date.getDate();
    data['userId'] = '64cb3c5a62affc9e2f07d218';
    const CreateTask = await TaskModel.create(data);
    return NextResponse.json(
      {
        status: true,
        message: 'Success!',
        data: CreateTask
      },
      { status: 201 }
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

//-----> Get all Tasks

export async function GET(req: NextRequest) {
  try {
    const allTask = await TaskModel.find();
    if (allTask.length === 0) {
      return NextResponse.json(
        {
          status: false,
          message: 'Not Found'
        },
        {
          status: 404
        }
      );
    }
    return NextResponse.json(
      {
        status: true,
        message: 'success!',
        data: allTask
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
