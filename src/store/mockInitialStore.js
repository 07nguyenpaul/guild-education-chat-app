import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const mockInitialState = {
  devices: {
    devices: [],
    currentTemp: {},
    forecast: [],
    requesting: false
  },
  zones: {
    status: null,
    requesting: false,
    error: ''
  }
};

const middlewares = [thunk];
export const mockStore = configureStore(middlewares);
