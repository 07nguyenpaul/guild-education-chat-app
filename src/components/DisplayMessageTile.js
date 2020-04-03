import React from 'react';
import { Tag } from 'carbon-components-react';
import moment from 'moment';
import PropTypes from 'prop-types';

import '../styles/ChatContainer.scss';

const DisplayMessageTile = ({firstUser, chat, currentUser}) => (
  <div className={firstUser === currentUser.id ? "message__tiles display-right" : "display-left"}>
    <div className="text__wrapper">
      <Tag
        className="message__tag"
        type="cool-gray"
        >
        {chat.message}
      </Tag>
      <div className="message--date">{moment(chat.createdAt).format('LLL')}</div>
    </div>
    <img className="header__avatar" alt="user avatar" src={chat.currentUser.photoURL} />
  </div>
);

DisplayMessageTile.propTypes = {
  firstUser: PropTypes.string,
  chat: PropTypes.object,
  currentUser: PropTypes.object,
};

export default DisplayMessageTile;
