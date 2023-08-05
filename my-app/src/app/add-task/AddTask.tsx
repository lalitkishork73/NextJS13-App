'use client';
import { useState } from 'react';
import logingSvg from '@/assets/login.svg';
import Image from 'next/image';
import { addTask } from '@/services/taskService';
import { toast } from 'react-toastify';

const AddTask = () => {
  const initStat = {
    title: '',
    content: '',
    status: 'none',
    // temp solution
    userId: '64a506ab413f1d5bcafcdbec'
  };

  const [task, setTask] = useState<any>(initStat);

  const handleAddTask = async (e: any) => {
    e.preventDefault();
    try {
      const result = await addTask(task);
      toast.success('your task is added!!', { position: 'top-center' });
      setTask({
        title: '',
        content: '',
        status: 'none'
      });
    } catch (err: any) {
      toast.error('Task not added !!', {
        position: 'top-center'
      });
    }
  };

  return (
    <section className="grid grid-cols-12 justify-center h-[815px]">
      <div className="col-span-4 col-start-5 p-5 shadow-sm">
        <div className="my-8 flex justify-center">
          <Image src={logingSvg} className="w-[50%]" alt="Login Banner" />
        </div>
        <h1 className="text-3xl text-center">Add your task here </h1>
        <form action="#!" onSubmit={handleAddTask}>
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_title"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value
                });
              }}
              value={task.title}
            />
          </div>
          {/* task CONENT  */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_content"
              rows={5}
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value
                });
              }}
              value={task.content}
            />
          </div>

          {/* task status */}
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value
                });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* button  actions */}
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
              Add Task{' '}
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3">
              Clear
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
