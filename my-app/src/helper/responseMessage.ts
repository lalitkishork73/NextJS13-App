import { NextResponse } from 'next/server';

export const createResponse = (
  statusBool: boolean,
  message: string,
  statusCode: number,
  data?: any // Optional data parameter for success response
) => {
  const responseData: any = { status: statusBool, message };
  if (data) {
    responseData['data'] = data;
  }

  return NextResponse.json(responseData, { status: statusCode });
};

export const ErrStatusResponse = (
  statusBool: boolean,
  message: string,
  statusCode: number
) => {
  return createResponse(
    statusBool ?? false,
    message ?? 'Error',
    statusCode ?? 500
  );
};

export const SuccesStatusResponse = (
  statusBool?: boolean,
  message?: string,
  statusCode?: number,
  data?: any
) => {
  return createResponse(
    statusBool ?? true,
    message ?? 'Success',
    statusCode ?? 200,
    data
  );
};
