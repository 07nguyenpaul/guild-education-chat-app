import React, { Component } from 'react';

import ChannelContainer from './ChannelContainer.js';
import ChatContainer from './ChatContainer.js';

import '../styles/Dashboard.scss';

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <ChannelContainer />
        <ChatContainer />
      </div>
    )
  }
}

export default Dashboard;
