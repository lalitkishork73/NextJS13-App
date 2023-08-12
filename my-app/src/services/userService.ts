import { httpAxios } from '@/helper/httpHelper';

//  ------ User SignUp Client api call
export async function signUp(user: any) {
  const result = await httpAxios.post('users', user);
  const response = await result.data;
  return response;
}

//  ------ User Login Client api call
export async function login(loginData: any) {
  const result = await httpAxios.post('login', loginData);

  // console.log(result, 'Client Call');
  const response = await result.data;
  return response;
}
//  ------ User Current Client api call
export async function currentUser() {
  const result = await httpAxios.get('current');
  const response = await result.data;
  return response;
}

//  ------ User Logout Client api call
export async function logout() {
  const result = await httpAxios.post('logout');
  const response = await result.data;
  return response;
}
