'use client';
import React, { useContext, useState } from 'react';
import UserContext from '@/context/userContext';
import { login } from '@/services/userService';
import { useRouter } from 'next/navigation';
import { toast, useToast } from 'react-toastify';

const Login = () => {
  const initState = {
    email: '',
    password: ''
  };
  const [loginData, setLoginData] = useState(initState);
  const context: any = useContext(UserContext);
  const router = useRouter();

  const loginFormSubmitted = async (e: any) => {
    e.preventDefault();
    toast('Toast is good', {
      hideProgressBar: true,
      autoClose: 2000,
      type: 'success',
      position: 'bottom-center'
    });
    if (loginData.email.trim() === '' || loginData.password.trim() === '') {
      console.log('workin');
      toast.info('Invalid Data!!', { position: 'top-center' });
      return;
    }
    try {
      const result: any = await login(loginData).then((res) =>
        toast.success('Logged In')
      );
      console.log(context);
      context.setUser(result?.user);
      router.push('/profile/user');
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <section className="h-[815px] grid grid-cols-12 ">
      <div className="col-span-4 col-start-5">
        <div className="py-5"></div>
        <h1 className="text-3xl text-center">Login</h1>
        <form action="#!" onSubmit={loginFormSubmitted}>
          <div className="mt-3">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium mb-2 ps-2  "
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="user_email"
              name="user_email"
              value={loginData.email}
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
              className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2 ps-2  "
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
              className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
            />
          </div>
          <div className="mt-3 text-center">
            <button
              type="submit"
              className="px-3 py-2 bg-orange-600 ms-3 rounded hover:bg-green-400"
            >
              Login
            </button>
            <button
              type="button"
              className="px-3 py-2 bg-orange-600 ms-3 rounded hover:bg-green-400"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
