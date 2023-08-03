'use client';
import bannerImage from '@/assets/login.svg';
import Image from 'next/image';

const HomeBanner = () => {
  return (
    <section className="bg-blue-900 text-white ">
      <div className="container mx-auto flex items-center justify-around py-5">
        <div className="mr-4">
          <Image src={bannerImage} alt="Banner" className="w-80 rounded-full" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">
            Welcome to Task Manager
          </h1>
          <p className="text-xl mb-8">
            Organize your tasks efficiently with our task manager app.
          </p>
          <button
            className="bg-white text-blue-900 px-4 py-2 mt-4 rounded-md shadow-md hover:shadow-lg hover:shadow-blue-300 transition duration-300"
            onClick={() => {}}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
