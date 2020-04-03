import nock from 'nock';
import { mockInitialState, mockStore } from '../store/mockInitialStore';

import * as actions from './actionCreators';

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

describe('Action Creators', () => {
  let store = mockStore(mockInitialState);

  afterEach(() => {
    nock.cleanAll();
  })

  it('should create SEND_MESSAGE__REQUEST action', () => {
    const expected = {
      "type": "SEND_MESSAGE__REQUEST"
    };
    expect(actions.sendMessageRequest()).toEqual(expected);
  });

  it('should create SEND_MESSAGE__SUCCESS action', () => {
    const expected = {
      "type": "SEND_MESSAGE__SUCCESS", "response": 200
    };
    expect(actions.sendMessageSuccess(200)).toEqual(expected);
  });

  it('should create SEND_MESSAGE__FAILURE actions', () => {
    const expected = {
      "type": "SEND_MESSAGE__FAILURE", "body": 404
    };
    expect(actions.sendMessageFailure(404)).toEqual(expected);
  });
});
