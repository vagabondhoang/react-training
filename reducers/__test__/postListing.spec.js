import RECEIVE_DATA from '../../types/data';
import { postsList } from '../../helpers/postsData';
import postListingReducer from '../postListingReducer';

describe('postListing reducer', () => {
  let state;
  const initialState = {
    postListing: [],
  };

  it('should return initialState if no type action is provided', () => {
    expect(postListingReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle RECEIVE_DATA action', () => {
    const action = {
      type: RECEIVE_DATA,
      data: postsList,
    };

    expect(postListingReducer(state, action).postListing).toEqual(action.data);
  });
});
