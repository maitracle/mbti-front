import { createReducer } from 'typesafe-actions';
import { UserAction, UserState } from './types';
import { LOG_IN_FAILURE, LOG_IN_SUCCESS, SET_LOG_IN_INFO } from './actions';


const initialState: UserState = {
  isLoggedIn: true,
  logInInfo: {
    username: '',
    password: '',
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
  }),
  [LOG_IN_FAILURE]: state => ({
    ...state,
  }),
});

export default userReducer;
