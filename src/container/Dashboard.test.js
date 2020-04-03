import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';
import configureStore from '../store/configureStore';

configure({ adapter: new Adapter() });

describe('Container: App ', () => {
  const store = configureStore({});

  const wrapper = mount(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );

  it('should render chat container', () => {
    expect(wrapper.find('ChatContainer').exists()).toBe(true);

  });
  it('should render active users container', () => {
    expect(wrapper.find('ActiveUsersContainer').exists()).toBe(true);

  });
});
