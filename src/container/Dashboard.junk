import React from 'react';
import { render } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import {spy} from 'sinon';

import {Dashboard} from './Dashboard';
import { getDevices, getForcast } from '../actions/devices';
import { getMockDevices } from '../store/mockDevices';
import configureStore from '../store/configureStore';

configure({ adapter: new Adapter() });

describe('Container: Dashboard ', () => {
  spy(Dashboard.prototype, 'componentDidMount');
  spy(Dashboard.prototype, 'handleSubmit');
  const props = {
    devices: getMockDevices(),
    status: null,
    errorMessage: '',
    loading: false,
    getDevices: jest.fn(),
    setDuration: jest.fn(),
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Dashboard {...props}/>
    );
  });

  it('should call componentDidMount', () => {
    expect(Dashboard.prototype.componentDidMount.callCount).toEqual(1);
    expect(wrapper.instance().props.getDevices).toHaveBeenCalledTimes(1);
  });

  it('should render accordion skeleton when loading', () => {
    const wrapper = shallow(
      <Dashboard devices={[]} loading={true} getDevices={jest.fn()} />
    );

    expect(wrapper.find('.dashboard').length).toEqual(1);
    expect(wrapper.find('AccordionSkeleton').length).toEqual(1)
  });

  it('should render 2 devices', () => {
    expect(wrapper.find('.accordion--devices').length).toBe(2);
    expect(wrapper.find('.device-tile').at(0).prop("title")).toBe('Rachio-43EC06');
    expect(wrapper.find('.device-tile').at(1).prop("title")).toBe('Rachio-55C41F');
  });

  it('should render 11 devices', () => {
    expect(wrapper.find('ZoneTiles').length).toBe(11);
  });

  it('should set a single zone duration', () => {
    const zone = { id: "9a538221-1012-4f35-b85b-dd1bb9533de0", name: "Zone 2" };
    const e = { preventDefault() {}}
    const time = wrapper.state('time');

    wrapper.instance().handleSubmit(e, zone);
    expect(Dashboard.prototype.handleSubmit.callCount).toEqual(1);
    expect(wrapper.instance().props.setDuration).toHaveBeenCalledWith(zone.id, time);
  });
});
