import React from 'react';
import { MessageProp } from '../types';
import './styles.scss';

type Props ={
  messages: Array<MessageProp>
  userId?: string
}

const Chat: React.FC<Props> = ({ messages, userId }) => (
  <div className="Chat">
    {messages && messages.map((message) => (
      <div className={`Chat_row${userId === message.userId ? '_myself' : ''}`}>
        <p>
          {message.userId}
          -
          {message.message}
        </p>
      </div>
    ))}
  </div>
);

export default Chat;
