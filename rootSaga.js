import { all } from 'redux-saga/effects';

import userSaga from './containers/UsersPage/sagas';

export default function* rootSaga() {
  yield all([userSaga()]);
}
