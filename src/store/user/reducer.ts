import { createReducer } from 'typesafe-actions';
import { UserAction, UserState } from './types';
import {
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  SET_LOG_IN_INFO,
  SET_SIGN_UP_INFO,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS
} from './actions';


const initialState: UserState = {
  isLoggedIn: false,
  logInInfo: {
    username: '',
    password: '',
  },
  signUpInfo: {
    username: '',
    password: '',
    gender: 'MALE',
    mbti: '',
    introduce: '',
    contact: '',
    view_count: 0,
  },
};


const userReducer = createReducer<UserState, UserAction>(initialState, {
  [SET_LOG_IN_INFO]: (state, action) => ({
    ...state,
    logInInfo: {
      ...state.logInInfo,
      ...action.payload,
    },
  }),
  [LOG_IN_SUCCESS]: state => ({
    ...state,
    isLoggedIn: true,
  }),
  [LOG_IN_FAILURE]: state => ({
    ...state,
    isLoggedIn: false,
  }),
  [SET_SIGN_UP_INFO]: (state, action) => ({
    ...state,
    signUpInfo: {
      ...state.signUpInfo,
      ...action.payload,
    },
  }),
  [SIGN_UP_SUCCESS]: state => ({
    ...state,
    isLoggedIn: true,
  }),
  [SIGN_UP_FAILURE]: state => ({
    ...state,
    isLoggedIn: false,
  }),
});

export default userReducer;
