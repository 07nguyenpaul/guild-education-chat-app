import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'carbon-components-react';

import '../styles/Header.scss';

const Header = ({ user, handleHeaderChange, login }) => (
  <div className="header">
    {user ? (
      <div className="header--user-info">
        <Dropdown
          id="header_menu"
          label=""
          items={[
            {
              label: 'Log out'
            },
          ]}
          onChange={value => handleHeaderChange(value)}
          selectedItem={`Welcome ${user.displayName}`}
          />
        <img className="header__avatar" alt="user avatar" src={user.photoURL} />
      </div>
    ) : (
      <button type="header__button" onClick={login}>Log In</button>
    )}
  </div>
);

Header.propTypes = {
  user: PropTypes.object,
  handleHeaderChange: PropTypes.func,
  login: PropTypes.func
};

export default Header;
