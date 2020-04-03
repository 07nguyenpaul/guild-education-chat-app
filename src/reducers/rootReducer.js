import { combineReducers } from 'redux';
import {user, sendMessage, grabMessages} from './user';

const rootReducer = combineReducers({
  user,
  sendMessage,
  grabMessages
});

export default rootReducer;
