import { db } from '../firebase';
import {
  CLEAR_USER,
  SET_USER__SUCCESS,
  ACTIVE_USERS_LIST__REQUEST,
  ACTIVE_USERS_LIST__SUCCESS,
  ACTIVE_USERS_LIST__FAILURE,
  SEND_MESSAGE__REQUEST ,
  SEND_MESSAGE__SUCCESS,
  SEND_MESSAGE__FAILURE,
  GRAB_MESSAGES__REQUEST ,
  GRAB_MESSAGES__SUCCESS,
  GRAB_MESSAGES__FAILURE,
} from './actionTypes';

export const addUserToActiveList = (user) => {
  return async dispatch => {
    dispatch(addUserToActiveListRequest());
    try {
      await db.collection("allActiveUsers").add({
        user: user,
        active: true
      })
      .then(function(docRef) {
        if(docRef.id) {
          let status = 200;
          dispatch(addUserToActiveListSuccess(status));
        }
      })
    } catch (error) {
      dispatch(addUserToActiveListFailure(error));
    }
  };
}

export const addUserToActiveListRequest = () => {
  return { type: ACTIVE_USERS_LIST__REQUEST };
};

export const addUserToActiveListSuccess = (response) => {
  return { type: ACTIVE_USERS_LIST__SUCCESS, response };
};

export const addUserToActiveListFailure = (body) => {
  return { type: ACTIVE_USERS_LIST__FAILURE, body};
};

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
        createdAt: new Date().toISOString()
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

export const grabMessages = () => {
  return async dispatch => {
    dispatch(grabMessagesRequest());
    try {
      await db.collection("messages").orderBy("createdAt", "asc")
      .onSnapshot(function(querySnapshot) {
        var messages = [];
          querySnapshot.forEach(function(doc) {
              messages.push(doc.data());
          });
          dispatch(grabMessagesSuccess(messages));
      })
    } catch (error) {
      dispatch(grabMessagesFailure(error));
    }
  };
}

export const grabMessagesRequest = () => {
  return { type: GRAB_MESSAGES__REQUEST };
};

export const grabMessagesSuccess = (response) => {
  return { type: GRAB_MESSAGES__SUCCESS, response };
};

export const grabMessagesFailure = (body) => {
  return { type: GRAB_MESSAGES__FAILURE, body};
};
