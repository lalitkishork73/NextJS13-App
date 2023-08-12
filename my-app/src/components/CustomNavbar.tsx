'use client';
import Link from 'next/link';
import Image from 'next/image';
import { logout } from '@/services/userService';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import UserContext from '@/context/userContext';
import { initState } from '@/context/reducer';
export default function CustomNavbar() {
  const context: any = useContext(UserContext);
  // console.log(context.userState, 'Navbar 1');
  const router = useRouter();

  async function Logout() {
    try {
      // console.log('logout client1');
      const result = await logout();
      // console.log(result, 'logout client2');

      if (result.status) {
        context.userDispatch({ type: 'remove' });
        // console.log(context.userState);
        router.push('/');
      }
    } catch (err) {
      toast.error('LogoutError');
    }
  }
  return (
    <nav className="bg-blue-900 h-11 py-2 px-3 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-xl font-semibold ">
          <a href="#!">
            <span className="p-1 border rounded-l-md">Work</span>
            <span className="border bg-white rounded-r-md text-blue-900 p-1">
              Manager
            </span>
          </a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          <li>
            <Link href={'/'} className="hover:text-blue-200">
              Home
            </Link>
          </li>
          {context?.userState?.IsLogin && (
            <>
              <li>
                <Link href={'/add-task'} className="hover:text-blue-200">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href={'/show-task'} className="hover:text-blue-200">
                  Show Task
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          {context?.userState?.IsLogin && (
            <>
              <li>
                <Link
                  href={'/profile'}
                  className="capitalize hover:text-blue-200"
                >
                  <div className="flex h-fit rounded-full ">
                    <Image
                      src={context?.userState?.user?.profileURL}
                      alt="DP"
                      width={25}
                      height={25}
                      className=" h-8 w-8 rounded-full  mr-2"
                    />
                    {context?.userState?.user?.name}
                  </div>
                </Link>
              </li>
              <li>
                <button
                  className="hover:text-blue-200"
                  onClick={() => {
                    Logout();
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
          {context?.userState?.IsLogout && (
            <>
              <li>
                <Link href={'/login'} className="hover:text-blue-200">
                  Login
                </Link>
              </li>
              <li>
                <Link href={'/signup'} className="hover:text-blue-200">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
