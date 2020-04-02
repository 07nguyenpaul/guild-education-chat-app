import {
  SET_USER__SUCCESS
} from '../actions/actionTypes';

const initialState = {
  currentUser: null,
};

export default function zones(state=initialState, action) {
  switch(action.type) {
    case SET_USER__SUCCESS:
      const code = action.response;
      return { ...state, currentUser: action.payload.currentUser };
    default:
      return state;
  }
};
