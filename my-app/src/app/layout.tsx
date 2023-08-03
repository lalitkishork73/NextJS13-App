import CustomNavbar from '@/components/CustomNavbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" flex flex-col ">
          <CustomNavbar />
          <div className="flex-grow">{children}</div>
          <div >
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
