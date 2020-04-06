import { combineReducers } from 'redux';
import {user, sendMessage, grabMessages} from './reducers';

const rootReducer = combineReducers({
  user,
  sendMessage,
  grabMessages
});

export default rootReducer;
