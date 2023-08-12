'use client';

import { createContext, Dispatch } from 'react';
import { UserState, UserAction, initState } from './reducer';

const UserContext = createContext<{
  userState: UserState;
  userDispatch: Dispatch<UserAction>;
}>({
  userState: initState,
  userDispatch: () => {}
});

export default UserContext;
