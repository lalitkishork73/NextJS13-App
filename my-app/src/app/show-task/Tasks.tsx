'use client';
import UserContext from '@/context/userContext';
import React, { useContext } from 'react';
import { RxCross1 } from 'react-icons/rx';
const Task = ({ task, deleteTaskParent }: any) => {
  const context: any = useContext(UserContext);
  // console.log();
  function deleteTask(taskId: any) {
    // ....
    deleteTaskParent(taskId);
  }

  return (
    <div
      className={` shadow-lg mt-2 rounded-md ${
        task.status == 'completed' ? 'bg-green-800' : 'bg-gray-800'
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{task.title}</h1>
          <span
            onClick={() => {
              deleteTask(task._id);
            }}
            className="shadow-lg hover:bg-gray-900 bg-gray-950 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer "
          >
            <RxCross1 />
          </span>
        </div>
        <p className="font-normal">{task.content}</p>
        <div className="flex justify-between mt-3">
          <p className="text-left">
            Status: <span className="font-bold">{task.status}</span>
          </p>
          <p className="text-right">
            Author: <span className="font-bold">{context?.userState?.user?.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
