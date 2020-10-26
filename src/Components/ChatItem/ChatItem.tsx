import React from 'react';
import { MessageProp } from '../types';
import './styles.scss';

interface Props extends MessageProp {
    isCurrentUser: boolean;
}

const ChatItem : React.FC<Props> = ({
  message, userProfile, displayName, isCurrentUser,
}) => (
  <div className={`ChatItem${isCurrentUser ? '_self' : ''}`}>
    <img className="ChatItem_img" alt={displayName} src={userProfile} />
    <div className={`ChatItem_textBubble${isCurrentUser ? '_self' : ''}`}>
      <p className="ChatItem_name">{displayName}</p>
      <p className="ChatItem_text">{message}</p>
    </div>
  </div>
);

export default ChatItem;
