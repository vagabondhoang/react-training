import RECEIVE_DATA from '../types/data';
import { getPostsById } from '../helpers/postsData';

const postsById = getPostsById();

const initialState = {
  postsById: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return { ...state, postsById: { ...state.postsById, postsById } };

    default:
      return state;
  }
};
