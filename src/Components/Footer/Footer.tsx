import React, { FC } from 'react';

interface Props {
    onSubmit: (e, messge, callback) => void
}

const Footer: FC<Props> = ({ onSubmit }) => {
  const [message, setMessage] = React.useState<string>('');
  const callback = () => setMessage('');
  return (
    <form>
      <input onChange={(e) => setMessage(e.target.value)} value={message} />
      <button type="submit" onClick={(e) => onSubmit(e, message, callback)}>Post</button>
    </form>
  );
};

export default Footer;
