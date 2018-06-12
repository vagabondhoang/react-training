import RECEIVE_DATA from '../types/data';
import { getUsersById } from '../helpers/postsData';

const usersById = getUsersById();

const initialState = {
  usersById: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        usersById: { ...state.usersById, usersById },
      };

    default:
      return state;
  }
};
