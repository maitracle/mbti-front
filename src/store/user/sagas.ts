import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOG_IN_REQUEST, logIn } from './actions';
import { LogInInfo } from './types';
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


export function* watchUser() {
  yield takeEvery(LOG_IN_REQUEST, LogInAsync);
}
