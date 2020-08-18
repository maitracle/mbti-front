import { ActionType } from 'typesafe-actions';
import { fetchMatchUser, logIn, setLogInInfo, setSignUpInfo, signUp } from './actions';


export type UserAction =
  | ActionType<typeof setLogInInfo>
  | ActionType<typeof logIn>
  | ActionType<typeof setSignUpInfo>
  | ActionType<typeof signUp>
  | ActionType<typeof fetchMatchUser>;


export type UserState = {
  isLoggedIn: boolean;
  logInInfo: LogInInfo;
  signUpInfo: SignUpInfo;
  matchUserInfo: MatchUserInfo;
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

export type MatchUserInfo = {
  contact: string;
  gender: '' | 'MALE' | 'FEMALE';
  introduce: string;
  mbti: string;
  errorMessage: string;
}
