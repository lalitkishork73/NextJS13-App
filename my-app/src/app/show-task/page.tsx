import type { Metadata } from 'next';
import ShowTasks from './ShowTasks';

export const metadata: Metadata = {
  title: 'Show-Task: Work Manager',
  description: 'Generated by create next app'
};

export default function ShowTask() {
  return (
    <>
      <ShowTasks />
    </>
  );
}
