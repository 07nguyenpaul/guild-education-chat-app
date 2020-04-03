import {
  SET_USER__SUCCESS,
  CLEAR_USER,
  SEND_MESSAGE__REQUEST,
  SEND_MESSAGE__SUCCESS,
  SEND_MESSAGE__FAILURE,
  GRAB_MESSAGES__REQUEST,
  GRAB_MESSAGES__SUCCESS,
  GRAB_MESSAGES__FAILURE,
} from '../actions/actionTypes';

const initialStateUser = {
  currentUser: null,
};

export function user(state=initialStateUser, action) {
  switch(action.type) {
    case SET_USER__SUCCESS:
      return { ...state, currentUser: action.payload.currentUser };
    case CLEAR_USER:
      return { ...initialStateUser };
    default:
      return state;
  }
};

const initialStateMessage = {
  status: null,
  requesting: false,
  error: ''
};

export function sendMessage(state=initialStateMessage, action) {
  switch(action.type) {
    case SEND_MESSAGE__REQUEST:
      return { ...state, status: null, requesting: true };
    case SEND_MESSAGE__SUCCESS:
      const code = action.response;
      return { ...state, status: code, requesting: false };
    case SEND_MESSAGE__FAILURE:
      return { ...state, requesting: false, error: action.error.message};
    default:
      return state;
  }
};

const initialStateMessages = {
  messages: [],
  requesting: false,
  error: ''
};

export function grabMessages(state=initialStateMessages, action) {
  switch(action.type) {
    case GRAB_MESSAGES__REQUEST:
      return { ...state, status: null, requesting: true };
    case GRAB_MESSAGES__SUCCESS:
      return { ...state, messages: action.response, requesting: false };
    case GRAB_MESSAGES__FAILURE:
      return { ...state, requesting: false, error: action.error};
    default:
      return state;
  }
};
