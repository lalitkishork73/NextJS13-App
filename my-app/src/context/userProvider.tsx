'use client';
import React, { useEffect, useState, FC, ReactNode } from 'react';
import UserContext from './userContext';
import { currentUser } from '@/services/userService';

interface ProviderProps {
  children: ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<any>({});
  console.log(user);
  useEffect(() => {
    (async function load() {
      try {
        const tempUser = await currentUser();
        setUser({ ...tempUser });
      } catch (err: any) {
        setUser(undefined);
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
