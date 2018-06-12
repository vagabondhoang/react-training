import { cloneableGenerator } from 'redux-saga/utils';
import { all } from 'redux-saga/effects';
import rootSaga from '../rootSaga';
import { watchFetchUsers } from '../../containers/UsersPage/sagas';

describe('rootSaga', () => {
  it('should react to actions', () => {
    const gen = cloneableGenerator(rootSaga)();
    expect(gen.next().value).toEqual(all([watchFetchUsers()]));
  });
});
