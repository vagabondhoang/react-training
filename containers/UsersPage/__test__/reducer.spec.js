import reducer from '../reducer';
import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../constanst';

describe('Users reducer', () => {
  let state;
  const initialState = {
    users: [],
    isFetching: false,
    error: '',
  };

  it('should return initialState if no type action is provided', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle GET_USERS_REQUEST action', () => {
    const action = {
      type: GET_USERS_REQUEST,
    };
    expect(reducer(state, action).isFetching).toEqual(true);
  });

  it('should handle GET_USERS_SUCCESS action', () => {
    const data = {};

    const action = {
      type: GET_USERS_SUCCESS,
      data,
    };

    expect(reducer(state, action).isFetching).toEqual(false);
    expect(reducer(state, action).error).toEqual('');
  });

  it('should handle GET_USERS_FAILURE action', () => {
    const error = 'Oop!Some thing went wrong';

    const action = {
      type: GET_USERS_FAILURE,
      error,
    };

    expect(reducer(state, action).isFetching).toEqual(false);
    expect(reducer(state, action).error).toEqual(error);
  });
});
