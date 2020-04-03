import React, { Component } from 'react';
import { auth, provider } from '../firebase';
import { connect } from 'react-redux';

import Dashboard from './Dashboard.js';
import Header from '../components/Header.js';

import {setUser, clearUser } from '../actions/user';

import '../styles/_mixins/_carbon.scss';

class App extends Component {
  componentDidMount() {
    // Persist User on refresh
    if (!this.props.user) {
      auth.onAuthStateChanged((user) => {
      if (user) {
        const currentUser = {
          displayName: user.displayName,
          email: user.email,
          id: user.uid,
          photoURL: user.photoURL
        };
        this.props.setUser(currentUser);
      }
      });
    }
  }

  // Refactor to actions file
  logout = async () => {
    await auth.signOut()
    this.props.clearUser()
  }

  login = async () => {
    const result = await auth.signInWithPopup(provider)
    const user = {
      displayName: result.user.displayName,
      email: result.user.email,
      id: result.user.uid,
      photoURL: result.user.photoURL,
    };
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
  clearUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
