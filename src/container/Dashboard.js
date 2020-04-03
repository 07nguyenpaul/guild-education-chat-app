import React, { Component } from 'react';

import ActiveUsersContainer from './ActiveUsersContainer.js';
import ChatContainer from './ChatContainer.js';

import '../styles/Dashboard.scss';

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <ActiveUsersContainer />
        <ChatContainer />
      </div>
    )
  }
}

export default Dashboard;
