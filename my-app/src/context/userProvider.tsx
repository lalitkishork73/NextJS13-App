'use client';
import React, { useEffect, Dispatch, FC, ReactNode, useReducer } from 'react';
import UserContext from './userContext';
import { currentUser } from '@/services/userService';
import { reducer, initState } from './reducer';
import { UserState, UserAction } from './reducer';

interface ProviderProps {
  children: ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }: ProviderProps) => {
  const [userState, userDispatch]: [any, Dispatch<UserAction>] = useReducer(
    reducer,
    initState
  );

  useEffect(() => {
    async function load() {
      try {
        const tempUser: any = await currentUser();
        return tempUser;
      } catch (err: any) {
        userDispatch({ type: 'remove' });
      }
    }
    load().then((response) => userDispatch({ type: 'add', payload: response }));
  }, [userDispatch]);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
