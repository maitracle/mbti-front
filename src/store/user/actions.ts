import { createAction, createAsyncAction } from 'typesafe-actions';
import { LogInInfo, MatchUserInfo, SetLogInInfoPayload, SetSignUpInfoPayload, SignUpInfo } from './types';


export const SET_LOG_IN_INFO = 'users/SET_LOG_IN_INFO';

export const LOG_IN_REQUEST = 'users/LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'users/LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'users/LOG_IN_FAILURE';

export const SET_SIGN_UP_INFO = 'users/SET_SIGN_UP_INFO';

export const SIGN_UP_REQUEST = 'users/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'users/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'users/SIGN_UP_FAILURE';

export const FETCH_MATCH_USER_REQUEST = 'users/FETCH_MATCH_USER_REQUEST';
export const FETCH_MATCH_USER_SUCCESS = 'users/FETCH_MATCH_USER_SUCCESS';
export const FETCH_MATCH_USER_FAILURE = 'users/FETCH_MATCH_USER_FAILURE';


export const setLogInInfo = createAction(SET_LOG_IN_INFO)<SetLogInInfoPayload>();

export const logIn = createAsyncAction(
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
)<LogInInfo, void, string>();

export const setSignUpInfo = createAction(SET_SIGN_UP_INFO)<SetSignUpInfoPayload>();

export const signUp = createAsyncAction(
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
)<SignUpInfo, void, string>();

export const fetchMatchUser = createAsyncAction(
  FETCH_MATCH_USER_REQUEST,
  FETCH_MATCH_USER_SUCCESS,
  FETCH_MATCH_USER_FAILURE,
)<void, MatchUserInfo, string>();
