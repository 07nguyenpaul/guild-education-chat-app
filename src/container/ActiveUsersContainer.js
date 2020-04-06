import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import '../styles/ActiveUsersContainer.scss';

export class ActiveUsersContainer extends Component {
  render() {
    return (
      <div className="active-users__container">
        List of active users
      </div>
    )
  }
}

// TODO: Add a list of active users so user can select who they want to talk to

// ActiveUsersContainer.propTypes = {
//
// };

export default ActiveUsersContainer;
