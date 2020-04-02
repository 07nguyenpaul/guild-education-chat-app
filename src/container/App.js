import React, { Component } from 'react';
import { auth, provider } from '../firebase';
import { connect } from 'react-redux';

import ApplicationGrid from './ApplicationGrid.js';
import Dashboard from './Dashboard.js';
import Header from '../components/Header.js';

import {setUser} from '../actions/user';

import '../styles/_mixins/_carbon.scss';

class App extends Component {
  componentDidMount() {
    // Persist User on refresh
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.setUser(user);
      }
    });
  }

  logout = async () => {
    const user = await auth.signOut()
    this.props.setUser(user)
  }

  login = async () => {
    const result = await auth.signInWithPopup(provider)
    const user = result.user;
    this.props.setUser(user);
  }

  handleHeaderChange = (value) => {
    if(value.selectedItem.label === 'Log out') this.logout();
  }

  render () {
    return (
      <div className="App">
        <Header user={this.props.user} handleHeaderChange={this.handleHeaderChange} login={this.login}/>
        <Dashboard />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.currentUser,
  };
}

const mapDispatchToProps = {
  setUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
