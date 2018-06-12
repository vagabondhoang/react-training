import RECEIVE_DATA from '../../types/data';
import { getPostsById } from '../../helpers/postsData';
import postsByIdReducer from '../postsByIdReducer';

let state;
const postsById = getPostsById();
const initialState = {
  postsById: {},
};

describe('postsById reducer', () => {
  it('should return initialState if no type of action is provided', () => {
    expect(postsByIdReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle RECEIVE_DATA action', () => {
    const action = {
      type: RECEIVE_DATA,
      data: postsById,
    };

    expect(postsByIdReducer(state, action).postsById.postsById).toEqual(action.data);
  });
});
