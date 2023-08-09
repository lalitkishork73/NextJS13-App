import type { Metadata } from 'next';
import SignUp from './SignUp';

export const metadata: Metadata = {
  title: 'Signup: Work Manager',
  description: 'Generated by create next app'
};

export default function Signup() {
  return <SignUp />;
}