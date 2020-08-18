import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_MATCH_USER_REQUEST, fetchMatchUser, LOG_IN_REQUEST, logIn, SIGN_UP_REQUEST, signUp } from './actions';
import { LogInInfo, MatchUserInfo, SignUpInfo } from './types';
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
    const res = yield call(SignUpApi, action.payload);

    localStorage.setItem('token', res.data.token);

    yield put(signUp.success());
  } catch (e) {
    localStorage.removeItem('token');

    yield put(signUp.failure('로그인에 실패했습니다.'));
  }
}


const fetchMatchUserApi = (token: string) =>
  axios.get(
    HOST + '/api/mbti/match-user',
    { headers: { Authorization: `Bearer ${token}` } }
  );

function* fetchMatchUserAsync() {
  try {
    const token = yield localStorage.getItem('token');
    const res = yield call(fetchMatchUserApi, token);

    const matchedUser: MatchUserInfo = {
      contact: res.data.matched_user.contact,
      gender: res.data.matched_user.gender,
      introduce: res.data.matched_user.introduce,
      mbti: res.data.matched_user.mbti,
      errorMessage: '이 페이지에서 이탈하면 다시는 이 분과 매칭될 수 없습니다!',
    };

    yield put(fetchMatchUser.success(matchedUser));
  } catch (e) {
    yield put(fetchMatchUser.failure(e?.response?.data?.msg));
  }
}


export function* watchUser() {
  yield takeEvery(LOG_IN_REQUEST, LogInAsync);
  yield takeEvery(SIGN_UP_REQUEST, SignUpAsync);
  yield takeEvery(FETCH_MATCH_USER_REQUEST, fetchMatchUserAsync);
}
