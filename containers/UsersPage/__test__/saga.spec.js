import { cloneableGenerator } from 'redux-saga/utils';
import { put, takeLatest, call } from 'redux-saga/effects';

import api from '../api';
import { watchFetchUsers, fetchUsers } from '../sagas';
import { GET_USERS_REQUEST } from '../constanst';
import { getUsersSuccess, getUsersFailure } from '../actions';

describe('userSaga', () => {
  const gen = cloneableGenerator(watchFetchUsers)();

  it('should watch GET_USERS_REQUEST', () => {
    expect(gen.next().value).toEqual(takeLatest(GET_USERS_REQUEST, fetchUsers));
  });
});

describe('fetchUsers', () => {
  const error = new Error('error');
  const table = [['data'], [null]];

  describe.each(table)('test data %o', data => {
    const gen = cloneableGenerator(fetchUsers)();

    it('should fetchUsers', () => {
      expect(gen.next().value).toEqual(call(api));
    });

    if (data) {
      it('should put getUsersSuccess', () => {
        expect(gen.next(data).value).toEqual(put(getUsersSuccess(data)));
      });
    }

    it('should done', () => {
      const clone = gen.clone();

      expect(clone.next().done).toEqual(true);
    });

    it('should catch error', () => {
      expect(gen.throw(error).value).toEqual(put(getUsersFailure(error)));
    });
  });
});
