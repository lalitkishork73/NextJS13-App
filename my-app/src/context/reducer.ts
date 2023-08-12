'use client';
export interface UserState {
  user: any;
  IsLogin: boolean;
  IsLogout: boolean;
}

export interface UserAction {
  type: 'add' | 'remove';
  payload?: any; // Payload for the 'add' action
}

export const initState = {
  user: {},
  IsLogin: false,
  IsLogout: true
};

export const reducer: any = (state: UserState, action: UserAction) => {
  const data = { ...action.payload };
  // console.log(action.payload, data);
  switch (action.type) {
    case 'add':
      return {
        user: data,
        IsLogin: true,
        IsLogout: false
      };
    case 'remove':
      return {
        user: {},
        IsLogin: false,
        IsLogout: true
      };
    default:
      return state;
  }
};
