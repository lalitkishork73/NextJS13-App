'use client';
import dynamic from 'next/dynamic';
const User = dynamic(() => import('./User'), {
  loading: () => (
    <>
      <main className="flex w-full h-[815px] justify-center bg-blue-100">
        <div className='flex justify-center items-center'>
            <p className='text-5xl text-blue-900 font-thin'>Loading......</p>
        </div>
      </main>
    </>
  )
});
// import User from './User';
export default function UserPage() {
  return (
    <>
      <User />
    </>
  );
}
