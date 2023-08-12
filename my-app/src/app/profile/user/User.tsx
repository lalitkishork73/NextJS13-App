'use client';

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UserContext from '@/context/userContext';

const User = () => {
  const { userState }: any | undefined = useContext(UserContext);
  // console.log(userState, 'User');

  return (
    <>
      <main className="flex w-full h-[815px] justify-center bg-blue-100">
        <div className="container bg-blue-100 flex border-2 border-r-blue-900">
          <div className="w-full flex justify-center items-center bg-blue-900">
            <Image
              src={userState?.user?.profileURL}
              alt="logo"
              width={400}
              height={400}
              className="w-[400px] h-[400px] border-8 border-blue-100 shadow-lg shadow-white"
            />
          </div>
          <div className="text-blue-900  w-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold capitalize">
              {userState?.user?.name}
            </h1>
            <h3 className="mt-2 text-sm p-1 font-light">
              {userState?.user?.email}
            </h3>
            <h3 className="mt-2 text-md p-1 capitalize">
              {userState?.user?.about}
            </h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default User;
