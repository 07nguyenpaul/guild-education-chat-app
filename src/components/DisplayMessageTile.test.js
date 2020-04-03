import React from 'react';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import DisplayMessageTile from './DisplayMessageTile';
import { configure, mount } from 'enzyme';

configure({ adapter: new Adapter() });

const user2 = {displayName: "Han Solo", email: "hansolo@example.com", id: "4SlqjxoV63", photoURL: "https://lh4.googleusercontent.com/-X4RK5TJxfGs/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPvgA23W5_B185PFq-i0VlgnkhaOw/photo.jpg"};

const defaultProps = {
  chat: {
    createdAt: "2020-04-03T19:33:59.752Z",
    currentUser: user2,
    message: "Hello Guild Education!",
    sendToUser: "Luke Skywalker"
  },
  firstUser: '8i2fio0',
  currentUser: user2
}

describe('Component: DisplayMessageTile ', () => {
  it('should render chat tiles', () => {
    const wrapper = mount(<DisplayMessageTile {...defaultProps} />);

    expect(wrapper.find('.message__tag span').text()).toBe("Hello Guild Education!");
    expect(wrapper.find('.message--date').text()).toBe("April 3, 2020 1:33 PM");
    expect(wrapper.find('.header__avatar').exists()).toBe(true);
  });
});
