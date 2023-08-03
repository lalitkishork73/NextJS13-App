'use client';
import Link from 'next/link';
export default function CustomNavbar() {
  console.log('lalit');
  return (
    <nav className="bg-blue-900 h-11 py-2 px-3 flex justify-between items-center">
      <div className="brand">
        <h1 className="tex-2xl font-semibold">
          <a href="#!">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          <li>
            <Link href={'/'} className="hover:text-blue-200">
              Home
            </Link>
          </li>
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
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          <li>
            <Link href={'#!'}> {}</Link>
          </li>
          <li>
            <button onClick={() => {}}> Logout</button>
          </li>
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
        </ul>
      </div>
    </nav>
  );
}
