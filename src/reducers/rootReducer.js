import { combineReducers } from 'redux';
import {user, sendMessage} from './user';

const rootReducer = combineReducers({
  user,
  sendMessage
});

export default rootReducer;
