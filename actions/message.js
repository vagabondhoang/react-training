// @flow

import SET_MESSAGE from '../types/message';

export default function(message: string) {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
}