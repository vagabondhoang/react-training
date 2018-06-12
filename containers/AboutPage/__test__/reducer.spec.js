import SET_MESSAGE from '../constants';

import reducer from '../reducer';

describe('about reducer', () => {
  let state;
  const initialState = { message: '' };

  it('should return the initial state if no type is provided', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle  SET_MESSAGE action', () => {
    const action = {
      type: SET_MESSAGE,
      payload: 'something',
    };

    expect(reducer(state, action).message).toEqual('something');
  });
});
