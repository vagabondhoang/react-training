import SET_MESSAGE from '../constants';

import setMessage from '../actions';

describe('About action', () => {
  it('should return the correct type for about data', () => {
    const payload = 'abc';
    const expectedResult = {
      type: SET_MESSAGE,
      payload,
    };

    expect(setMessage(payload)).toEqual(expectedResult);
  });
});
