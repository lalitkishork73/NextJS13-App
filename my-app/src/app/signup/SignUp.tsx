'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import SignUpBanner from '@/assets/singup.svg';
import { signUp } from '@/services/userService';

function SignUp() {
  const initState = {
    name: '',
    email: '',
    password: '',
    about: '',
    profileURL: ''
  };
  const [Signdata, setSigndata] = useState(initState);

  const signup = async (e: any) => {
    e.preventDefault();
    if (Object.keys(Signdata).length < 5) {
      toast.warning('All Field are required', { position: 'top-center' });
      // console.log('Input Required');
    }
    try {
      const result = await signUp(Signdata);

      toast.success('user Is Registerd', { position: 'top-center' });
      setSigndata(initState);
    } catch (err: any) {
      toast.error('Signup Error !! ' + err.response.data.message, {
        position: 'top-center'
      });
    }
  };
  return (
    <main className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <div className="flex justify-center m-5">
            <Image src={SignUpBanner} alt="signUp" className="w-[40%] h-auto" />
          </div>
          <h1 className="text-3xl text-center">SignUp</h1>
          <form action="#!" className="mt-5" onSubmit={signup}>
            <div className="mt-3">
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                placeholder='"Username'
                name="username"
                value={Signdata.name}
                onChange={(e) =>
                  setSigndata({ ...Signdata, name: e.target.value })
                }
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                placeholder='"Email'
                name="email"
                value={Signdata.email}
                onChange={(e) =>
                  setSigndata({ ...Signdata, email: e.target.value })
                }
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                placeholder='Password'
                name="password"
                value={Signdata.password}
                onChange={(e) =>
                  setSigndata({ ...Signdata, password: e.target.value })
                }
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block text-sm font-medium mb-2 ps-2"
              >
                About
              </label>
              <textarea
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                placeholder="Enter here"
                id="user_about"
                name="user_about"
                rows={8}
                onChange={(e) => {
                  setSigndata({
                    ...Signdata,
                    about: e.target.value
                  });
                }}
                value={Signdata.about}
              ></textarea>
            </div>
            <div className="mt-3">
              <label
                htmlFor="profileUrl"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Profile Picture
              </label>
              <input
                type="text"
                placeholder=" Profile Picture"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                name="profileUrl"
                onChange={(e) => {
                  setSigndata({
                    ...Signdata,
                    profileURL: e.target.value
                  });
                }}
                value={Signdata.profileURL}
              />
            </div>
            <div className="mt-3 text-center">
              <button
                type="submit"
                className="px-3 py-2 bg-green-600  rounded hover:bg-green-400"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
