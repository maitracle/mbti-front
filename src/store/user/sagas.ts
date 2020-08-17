import { call, put, takeEvery } from 'redux-saga/effects';
import { LOG_IN_REQUEST, logIn } from './actions';
import { LogInInfo } from './types';


const LogInApi = (payload: LogInInfo) => null;
  // axios.get(HOST + `/api/users/username-validity/?username=${payload.username}`);

function* LogInAsync(action: { type: string, payload: LogInInfo }) {
  try {
    // const res: ValidateUsernameResponse = yield call(LogInApi, action.payload);
    //
    // const payload: ValidateUsernameResultPayload = {
    //   isUniqueUsername: res.data.isUniqueUsername,
    //   message: res.data.isUniqueUsername ? '완벽해요!' : '이미 사용중인 ID네요 ㅠㅠ',
    // };

    yield put(logIn.success());
  } catch (e) {
    yield put(logIn.failure('로그인에 실패했습니다.'));
  }
}

export function* watchUser() {
  yield takeEvery(LOG_IN_REQUEST, LogInAsync);
}