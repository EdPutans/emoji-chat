import React, { useRef, useEffect, FC } from 'react';
import ChatItem from '../ChatItem/ChatItem';
import { MessageProp } from '../types';
import './styles.scss';

type Props ={
  messages: Array<MessageProp>
  userId?: string
}

const Chat: FC<Props> = ({ messages, userId }) => {
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
          {messages?.length ? messages.map((message) => (
            <ChatItem {...message} key={message.id} isCurrentUser={message.userId === userId} />
          )) : <p>No messages yet for some reason.</p>}
          <div ref={scrollMe} />

        </div>
      </div>
    </>
  );
};

export default Chat;
