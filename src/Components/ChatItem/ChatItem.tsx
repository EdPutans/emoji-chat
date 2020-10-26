import moment from 'moment';
import React from 'react';
import { MessageProp } from '../types';
import './styles.scss';

interface Props extends MessageProp {
    isCurrentUser: boolean;
}

const ChatItem : React.FC<Props> = ({
  message, userProfile, displayName, isCurrentUser, createdAt,
}) => (
  <div className={`ChatItem${isCurrentUser ? '_self' : ''}`}>
    <img className="ChatItem_img" alt={displayName} src={userProfile} />
    <div className={`ChatItem_textBubble${isCurrentUser ? '_self' : ''}`}>
      <p className="ChatItem_name">
        {displayName}
        {' - '}
        {moment(createdAt?.seconds * 1000).format('HH:mm DD/MM')}
      </p>
      <p className="ChatItem_text">{message}</p>
    </div>
  </div>
);

export default ChatItem;
