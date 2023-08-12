'use client';
import UserContext from '@/context/userContext';
import { deleteTask, getTasksOfUser } from '@/services/taskService';
import { useContext, useEffect, useState } from 'react';
import Task from './Tasks';
import { toast } from 'react-toastify';

const ShowTasks = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const context: any = useContext(UserContext);
  // console.log(context.userState.user);
  async function loadTasks(userId: any) {
    try {
      const tasks = await getTasksOfUser(userId);
      setTasks([...tasks].reverse());
      // console.log(tasks);
    } catch (error) {
      // console.log(error);
    }
  }

  useEffect(() => {
    if (context?.userState?.user) {
      loadTasks(context?.userState?.user?._id);
    }
  }, [context.userState]);

  async function deleteTaskParent(tasksId: string) {
    try {
      const result = await deleteTask(tasksId);
      // console.log(result);
      const newTasks = tasks.filter((item) => item._id != tasksId);
      setTasks(newTasks);
      toast.success('Your task is deleted ');
    } catch (error) {
      toast.error('Error in deleting task !!');
    }
  }
  return (
    <section className="grid grid-cols-12 mt-3 h-[815px]">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3 ">Your tasks ( {tasks.length} )</h1>

        {tasks.map((task) => (
          <Task
            task={task}
            key={task._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}
      </div>
    </section>
  );
};

export default ShowTasks;
