'use client';
import Image from 'next/image';
import ImageBanner from '@/assets/singup.svg';
const ActionSection = () => {
  return (
    <section className="relative bg-blue-900 text-white py-20">
      <div className="absolute top-0 w-full h-full z-10 bg-opacity-70"></div>
      <div className="container mx-auto text-center relative z-20">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Take Control of Your Tasks
        </h2>
        <p className="text-xl text-center mb-8">
          Start managing your tasks effieciently with our task manager app.
        </p>
        <button className="bg-white text-blue-900 px-4 py-2 mt-4 rounded-md shadow-md hover:shadow-lg hover:shadow-blue-300 transition duration-300">
          Get Started
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full z-0 opacity-30">
        <Image
          src={ImageBanner}
          alt="banner"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default ActionSection;
