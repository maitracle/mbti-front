import { ActionType } from 'typesafe-actions';
import { logIn, setLogInInfo } from './actions';


export type UserAction =
  | ActionType<typeof logIn>
  | ActionType<typeof setLogInInfo>;


export type UserState = {
  isLoggedIn: boolean;
  logInInfo: LogInInfo;
}

export type LogInInfo = {
  username: string;
  password: string;
}

export type SetLogInInfoPayload = Partial<LogInInfo>;
