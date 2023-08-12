'use client';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UserContext from '@/context/userContext';

export default function Profile() {
  const context: any = useContext(UserContext);

  return (
    <>
      <main className="h-[815px] w-full flex justify-center">
        <div className="container  w-full flex justify-center items-center">
          <Link href="/profile/user">
            <div className="w-96 h-40 bg-blue-900 hover:bg-blue-800 flex justify-around items-center">
              <Image
                src={context.userState.user.profileURL}
                alt="logo"
                width={200}
                height={200}
                className="rounded-full w-[100px] h-[100px] "
              />
              <h1 className="hover:text-blue-100">
                {context.userState.user.name}
              </h1>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
