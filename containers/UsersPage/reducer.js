import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from './constanst';

const initialState = {
  users: [],
  isFetching: false,
  error: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: [...state.users, action.data],
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
