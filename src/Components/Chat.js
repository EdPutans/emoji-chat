import React from 'react';

// todo: transform to tsx
const Chat = ({ messages }) => (
  <div>
    {messages.map(({ message, userId }) => (
      <p>
        {userId}
        -
        {message}
      </p>
    ))}
  </div>
);
export default Chat;
