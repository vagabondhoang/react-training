import RECEIVE_DATA from '../types/data';

import { postsList } from '../helpers/postsData';

const initialState = {
  postListing: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        postListing: state.postListing.concat(postsList),
      };
    default:
      return state;
  }
};
