import { all } from 'redux-saga/effects';

import { watchFetchUsers } from '../containers/UsersPage/sagas';

export default function* rootSaga() {
  yield all([watchFetchUsers()]);
}
