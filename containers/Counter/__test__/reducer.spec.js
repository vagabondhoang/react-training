import INCREMENT from '../constants';
import reducer from '../reducer';

describe('Counter reducer', () => {
  let state;
  const initialState = {
    count: 1,
  };
  const action = {
    type: INCREMENT,
  };

  it('should return initialState if no type of action is provided', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
  it('should handle INCREMENT action', () => {
    expect(reducer(state, action).count).toEqual(2);
  });
});
