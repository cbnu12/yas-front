import React, { createContext, Dispatch, useReducer } from "react";

export type UserState =
  | {
      id: string;
      email: string;
      nickname: string;
      accessToken: string;
      refreshToken: string;
    }
  | undefined;

export const UserStateContext = createContext<UserState>(undefined);

type UserAction =
  | { type: "SIGN_IN"; payload: UserState }
  | { type: "SIGN_OUT" }
  | { type: "UPDATE_ACCESS_TOKEN"; payload: string }
  | { type: "UPDATE_REFRESH_TOKEN"; payload: string };

type UserDispatch = Dispatch<UserAction>;

export const UserDispatchContext =
  createContext<UserDispatch | undefined>(undefined);

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
    case "SIGN_OUT":
      return undefined;
    case "UPDATE_ACCESS_TOKEN":
      if (!state) return state;
      return { ...state, accessToken: action.payload };
    case "UPDATE_REFRESH_TOKEN":
      if (!state) return state;
      return { ...state, refreshToken: action.payload };
    default:
      return state;
  }
};

export const UserContext = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, undefined);

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};
