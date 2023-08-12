import { httpAxios } from '@/helper/httpHelper';

// ------ Client api call for create task

export async function addTask(task: any) {
  const result = await httpAxios.post('tasks', task);
  const response = await result.data;
  return response;
}

// ------ Client api call for get task
export async function getTasksOfUser(userId: any) {
  // console.log(userId);
  const result = await httpAxios.get(`users/${userId}/tasks`);
  const response = await result.data;
  return response;
}

// ------ Client api call for delete task
export async function deleteTask(taskId: any) {
  const result = await httpAxios.delete(`tasks/${taskId}`);
  const response = await result.data;
  return response;
}
