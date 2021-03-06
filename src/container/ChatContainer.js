import React, { Component } from 'react';
import { Button, Form, TextInput } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DisplayMessageTile from '../components/DisplayMessageTile';

import { sendMessage, grabMessages } from '../actions/actionCreators';

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

  // TODO: 3rd arguement will be replaced with an active user to start a convo with
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
    const { user, allMessages } = this.props;

    return (
      <div className="chat-container">
        <div className="main-screen">
          {allMessages && allMessages.length > 0 && user && this.renderConvo()}
        </div>
      <Form
        className="chat__form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <TextInput
          className="chat__form--text-input"
          defaultValue={message}
          disabled={ !user ? true : false }
          id="chat__form--text-input"
          labelText=""
          light={true}
          onChange={e => this.handleChange(e)}
          placeholder="Write a message..."
          size={undefined}
          type="text"
          value={message}
        />
        <Button
          className="chat__form--submit-btn"
          disabled={ !user && message ? true : !message ? true : false }
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
