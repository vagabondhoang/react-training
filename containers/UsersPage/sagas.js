import { takeLatest, put, call } from 'redux-saga/effects';

import api from './api';
import { GET_USERS_REQUEST } from './constanst';
import { getUsersSuccess, getUsersFailure } from './actions';

function* fetchUsers() {
  try {
    const data = yield call(api);
    if (data) {
      yield put(getUsersSuccess(data));
    }
  } catch (err) {
    yield put(getUsersFailure('there is something wrong!'));
  }
}

export default function* watchFetchUsers() {
  yield takeLatest(GET_USERS_REQUEST, fetchUsers);
}
