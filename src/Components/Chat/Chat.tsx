import { UserInfo } from 'firebase';
import React, { useRef, useEffect, FC } from 'react';
import ChatItem from '../ChatItem/ChatItem';
import { MessageProp } from '../types';
import './styles.scss';

type Props ={
  messages: Array<MessageProp>
  userId?: string
  user: UserInfo
}

const Chat: FC<Props> = ({ messages, user }) => {
  const scrollMe = useRef(undefined);

  useEffect(() => {
    if (scrollMe?.current) {
       // eslint-disable-next-line no-unused-expressions
       scrollMe?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      <div className="Chat">
        <div>
          {messages && messages.map((message) => (
            <ChatItem {...message} key={message.id} isCurrentUser={message.userId === user.uid} />
          ))}
          <div ref={scrollMe} />

        </div>
      </div>
    </>
  );
};

export default Chat;
