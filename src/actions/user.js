import {
  SET_USER__SUCCESS,
} from './actionTypes';

export function setUser(user) {
  return {
    type: SET_USER__SUCCESS,
    payload: {
      currentUser: user
    }
  }
}
