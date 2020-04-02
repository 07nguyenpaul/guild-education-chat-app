import React, { Component } from 'react';
import { Button, Form, TextInput } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DisplayMessages from '../components/DisplayMessages';

import { sendMessage } from '../actions/user';

import '../styles/ChatContainer.scss';

export class ChatContainer extends Component {
  state = {
    message: '',
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }

  clearInput = () => {
    this.setState({ message: '' })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.sendMessage(this.state.message, this.props.user, 'Joseph')
    await this.clearInput();
  }

  render() {
    const { message } = this.state;

    return (
      <div className="chat-container">
      <DisplayMessages/>
      <Form
        className="chat__form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <TextInput
          className="chat__form--text-input"
          defaultValue={message}
          disabled={false}
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
          disabled={false}
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
  };
}

const mapDispatchToProps = {
  sendMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
