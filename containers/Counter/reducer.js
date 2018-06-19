import INCREMENT from './constants';

const initialState = {
  count: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
