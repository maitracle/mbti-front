import { createAction, createAsyncAction } from 'typesafe-actions';
import { LogInInfo, SetLogInInfoPayload } from './types';


export const SET_LOG_IN_INFO = 'users/SET_LOG_IN_INFO';

export const LOG_IN_REQUEST = 'users/LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'users/LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'users/LOG_IN_FAILURE';


export const setLogInInfo = createAction(SET_LOG_IN_INFO)<SetLogInInfoPayload>();

export const logIn = createAsyncAction(
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
)<LogInInfo, void, string>();
