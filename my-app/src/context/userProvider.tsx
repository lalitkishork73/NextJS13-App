'use client';
import React, { useEffect, useState, FC, ReactNode } from 'react';
import UserContext from './userContext';
import { currentUser } from '@/services/userService';

interface ProviderProps {
  children: ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }: ProviderProps) => {
  const initState = { user: '', IsLogin: false, IsLogout: true };
  const [user, setUser] = useState<any>(initState);
  console.log(user, 'Provider1');
  useEffect(() => {
    async function load() {
      try {
        const tempUser = await currentUser();
        // console.log(tempUser, 'tempuser');
        setUser({ ...tempUser });
      } catch (err: any) {
        setUser(undefined);
      }
    }
    load();
  }, []);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
