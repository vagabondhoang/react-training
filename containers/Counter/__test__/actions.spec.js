import INCREMENT from '../constants';
import increment from '../actions';

describe('Counter actions', () => {
  it('should return correct type for counter data', () => {
    const expectedResult = {
      type: INCREMENT,
    };

    expect(increment()).toEqual(expectedResult);
  });
});
