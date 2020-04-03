import React from 'react';
import { render } from '@testing-library/react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import {spy} from 'sinon';

import {ChatContainer} from './ChatContainer';
import { sendMessage, grabMessages } from '../actions/actionCreators';
import configureStore from '../store/configureStore';

configure({ adapter: new Adapter() });

// Move this to mock data test file
const user1 = {displayName: "Luke Skywalker", email: "skywalking@example.com", id: "oRDDGH4Xf8NcJOl", photoURL: "https://lh4.googleusercontent.com/-X4RK5TJxfGs/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPvgA23W5_B185PFq-i0VlgnkhaOw/photo.jpg"};
const user2 = {displayName: "Han Solo", email: "hansolo@example.com", id: "4SlqjxoV63", photoURL: "https://lh4.googleusercontent.com/-X4RK5TJxfGs/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPvgA23W5_B185PFq-i0VlgnkhaOw/photo.jpg"};
const messages = [
  {
    createdAt: "2020-04-03T19:33:59.752Z",
    currentUser: user1,
    message: "Hello Guild Education!",
    sendToUser: "Luke Skywalker"
  },
  {
    createdAt: "2020-04-03T19:34:15.438Z",
    currentUser: user2,
    message: "Hola mate! How are you?",
    sendToUser: "Han Solo"
  }
];

describe('Container: ChatContainer ', () => {
  spy(ChatContainer.prototype, 'componentDidMount');
  const props = {
    user: user1,
    allMessages: messages,
    sendMessage: jest.fn(),
    grabMessages: jest.fn(),
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ChatContainer {...props}/>
    );
  });

  it('should call componentDidMount', () => {
    expect(ChatContainer.prototype.componentDidMount.callCount).toEqual(1);
    expect(wrapper.instance().props.grabMessages).toHaveBeenCalledTimes(1);
  });

  it('should handle that state change onChange', () => {
    wrapper.setState({ message: 'Howdy Luke' });
    expect(wrapper.state()).toEqual({"message": "Howdy Luke"});
  });

  it('should call sendMessage on submit', () => {

    const e = { preventDefault() {}}
    const message = wrapper.state('message');

    wrapper.find('.chat__form--submit-btn').simulate('click');
    wrapper.instance().handleSubmit(e);
    expect(wrapper.instance().props.sendMessage).toHaveBeenCalledWith(message, user1, 'Paul');
  });

  it('should clear the text input after submission', () => {
    wrapper.setState({ message: 'How are you?' });
    wrapper.instance().clearInput();
    expect(wrapper.state()).toEqual({"message": ""});
  });

  it('form and submit button are disabled if no logged in user', () => {
    const props = {
      user: null,
      allMessages: [],
      sendMessage: jest.fn(),
      grabMessages: jest.fn(),
    }

    let chatWrapper = mount(
      <ChatContainer {...props}/>
    );
    expect(chatWrapper.find('.chat__form--text-input', { disabled: true })).toHaveLength(2);
    expect(chatWrapper.find('.chat__form--submit-btn', { disabled: true })).toHaveLength(2);
  });
});
