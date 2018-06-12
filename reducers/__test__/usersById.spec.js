import RECEIVE_DATA from '../../types/data';
import { getUsersById } from '../../helpers/postsData';
import usersByIdReducer from '../usersByIdReducer';

let state;
const usersById = getUsersById();
const initialState = {
  postsById: {},
};

describe('usersById reducer', () => {
  it('should return initialState if no type of action is provided', () => {
    expect(usersByIdReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle RECEIVE_DATA action', () => {
    const action = {
      type: RECEIVE_DATA,
      data: usersById,
    };

    expect(usersByIdReducer(state, action).usersById.usersById).toEqual(action.data);
  });
});
