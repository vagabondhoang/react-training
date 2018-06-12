import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../constanst';
import { getUsersRequest, getUsersSuccess, getUsersFailure } from '../actions';

describe('Users actions', () => {
  it('should return GET_USERS_REQUEST type', () => {
    const expectedResult = {
      type: GET_USERS_REQUEST,
    };

    expect(getUsersRequest()).toEqual(expectedResult);
  });

  it('should return GET_USERS_SUCCESS type', () => {
    let data;
    const expectedResult = {
      type: GET_USERS_SUCCESS,
      data,
    };

    expect(getUsersSuccess(data)).toEqual(expectedResult);
  });

  it('should return GET_USERS_FAILURE type', () => {
    let error;
    const expectedResult = {
      type: GET_USERS_FAILURE,
      error,
    };

    expect(getUsersFailure(error)).toEqual(expectedResult);
  });
});
