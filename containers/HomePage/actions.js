import SET_MESSAGE from './constants';

export default message => dispatch => {
  dispatch({
    type: SET_MESSAGE,
    payload: message,
  });
};
