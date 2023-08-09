'use client';
import Link from 'next/link';
import { logout } from '@/services/userService';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import UserContext from '@/context/userContext';
export default function CustomNavbar() {
  const context: any = useContext(UserContext);
  // console.log(context, 'Navbar 1');
  const router = useRouter();

  async function Logout() {
    try {
      // console.log(context, 'Navbar 2');

      const result = await logout();
      context.setUser(undefined);
      router.push('/');
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
          {context.user && (
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
          {context.user && (
            <>
              <li>
                <Link href={'#!'}> {}</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    Logout;
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
          {!context.user && (
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
