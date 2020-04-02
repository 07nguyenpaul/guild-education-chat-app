import {db} from '../firebase';
import {
  CLEAR_USER,
  SET_USER__SUCCESS,
  SEND_MESSAGE__REQUEST ,
  SEND_MESSAGE__SUCCESS,
  SEND_MESSAGE__FAILURE,
} from './actionTypes';

export function setUser(user) {
  return {
    type: SET_USER__SUCCESS,
    payload: {
      currentUser: user
    }
  }
}

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  }
}

export const sendMessage = (message, user, sendToUser) => {
  return async dispatch => {
    dispatch(sendMessageRequest());
    try {
      await db.collection("messages").add({
        message: message,
        currentUser: user,
        sendToUser: sendToUser,
        createdAt: new Date()
      })
      .then(function(docRef) {
        if(docRef.id) {
          let status = 200;
          dispatch(sendMessageSuccess(status));
        }
      })
    } catch (error) {
      dispatch(sendMessageFailure(error));
    }
  };
}

export const sendMessageRequest = () => {
  return { type: SEND_MESSAGE__REQUEST };
};

export const sendMessageSuccess = (response) => {
  return { type: SEND_MESSAGE__SUCCESS, response };
};

export const sendMessageFailure = (body) => {
  return { type: SEND_MESSAGE__FAILURE, body};
};
