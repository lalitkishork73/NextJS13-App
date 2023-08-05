export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className="text-white w-full h-full flex flex-col items-center justify-center bg-blue-900 ">
        <div className="flex p-5 w-full justify-around">
          <div className="text-center flex-col justify-center w-full">
            <h1 className="text-3xl font-semibold">Welcome to work manager</h1>
            <p className="text-sm p-1">
              We are Work Managers who builds powerfull Todos and tasks for
              users and developing clients.
            </p>
          </div>
          <div className="flex flex-col items-center w-full text-sm">
            <h1 className="font-semibold">Important Links</h1>
            <ul className="list-none">
              <li className="hover:text-blue-200">
                <a href="https://www.facebook.com">FaceBook</a>
              </li>
              <li className="hover:text-blue-200">
                <a href="https://www.youtube.com">Youtube</a>
              </li>
              <li className="hover:text-blue-200">
                <a href="https://www.instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-xs p-1">
          © {date} Copyright Work Manager Inc. | All rights reserved{' '}
        </p>
      </footer>
    </>
  );
}
