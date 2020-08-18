import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOG_IN_REQUEST, logIn, SIGN_UP_REQUEST, signUp } from './actions';
import { LogInInfo, SignUpInfo } from './types';
import { HOST } from '../../constants/requests';


const LogInApi = (payload: LogInInfo) => axios.post(HOST + '/api/tokens', payload);

function* LogInAsync(action: { type: string, payload: LogInInfo }) {
  try {
    const res = yield call(LogInApi, action.payload);

    localStorage.setItem('token', res.data.token);

    yield put(logIn.success());
  } catch (e) {
    localStorage.removeItem('token');

    yield put(logIn.failure('로그인에 실패했습니다.'));
  }
}


const SignUpApi = (payload: SignUpInfo) => axios.post(HOST + '/api/users', payload);

function* SignUpAsync(action: { type: string, payload: SignUpInfo }) {
  try {
    // const payload: SignUpInfo = {
    //   "username": "222",
    //   "password": "password",
    //   "gender": "MALE",
    //   "introduce": "",
    //   "mbti": "ENTP",
    //   "contact": "link",
    //   "view_count": 0
    // };
    console.log(action.payload);
    // const res = yield call(SignUpApi, action.payload);

    // localStorage.setItem('token', res.data.token);

    yield put(signUp.success());
  } catch (e) {
    localStorage.removeItem('token');

    yield put(signUp.failure('로그인에 실패했습니다.'));
  }
}


export function* watchUser() {
  yield takeEvery(LOG_IN_REQUEST, LogInAsync);
  yield takeEvery(SIGN_UP_REQUEST, SignUpAsync);
}
