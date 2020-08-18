import { ActionType } from 'typesafe-actions';
import { logIn, setLogInInfo, setSignUpInfo, signUp } from './actions';


export type UserAction =
  | ActionType<typeof setLogInInfo>
  | ActionType<typeof logIn>
  | ActionType<typeof setSignUpInfo>
  | ActionType<typeof signUp>;


export type UserState = {
  isLoggedIn: boolean;
  logInInfo: LogInInfo;
  signUpInfo: SignUpInfo;
}

export type LogInInfo = {
  username: string;
  password: string;
}

export type SetLogInInfoPayload = Partial<LogInInfo>;

export type SignUpInfo = {
  username: string;
  password: string;
  gender: 'MALE' | 'FEMALE';
  mbti: string;
  introduce: string;
  contact: string;
  view_count: number;
}

export type SetSignUpInfoPayload = Partial<SignUpInfo>;
