import React, { Component } from 'react';
import { Button, Form, TextInput } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DisplayMessageTile from '../components/DisplayMessageTile';

import { sendMessage, grabMessages, grabMessagesSuccess } from '../actions/user';

import '../styles/ChatContainer.scss';

export class ChatContainer extends Component {
  state = {
    message: '',
  }

  componentDidMount() {
    this.props.grabMessages();
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }

  clearInput = () => {
    this.setState({ message: '' })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.sendMessage(this.state.message, this.props.user, 'Paul')
    this.clearInput();
  }

  renderConvo = () => {
    return this.props.allMessages.map(chat => {
      const firstUser = chat.currentUser.id;

      return (
        <DisplayMessageTile
          key={chat.createdAt}
          firstUser={firstUser}
          chat={chat}
          currentUser={this.props.user}
        />
      )
    })
  }

  render() {
    const { message } = this.state;

    return (
      <div className="chat-container">
        <div className="main-screen">
          {this.props.allMessages && this.props.allMessages.length > 0 && this.renderConvo()}
        </div>
      <Form
        className="chat__form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <TextInput
          className="chat__form--text-input"
          defaultValue={message}
          disabled={ !this.props.user ? true : false }
          id="chat__form--text-input"
          labelText=""
          light={true}
          onChange={e => this.handleChange(e)}
          placeholder="Write a message..."
          size={undefined}
          type="text"
        />
        <Button
          className="chat__form--submit-btn"
          disabled={ !this.props.user ? true : false }
          kind="primary"
          type="submit"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          Send
        </Button>
      </Form>
      </div>
    )
  }
}

ChatContainer.propTypes = {
  user: PropTypes.object
};

function mapStateToProps(state) {
  return {
    user: state.user.currentUser,
    allMessages: state.grabMessages.messages,
  };
}

const mapDispatchToProps = {
  sendMessage,
  grabMessages,
  grabMessagesSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
