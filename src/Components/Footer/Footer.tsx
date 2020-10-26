import React, { FC } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './styles.scss';

interface Props {
    // eslint-disable-next-line no-unused-vars
    onSubmit: (e, message, callback) => any
    onLogin: () => any
    isLoggedIn?: boolean
}

const Footer: FC<Props> = ({ onSubmit, isLoggedIn, onLogin }) => {
  const [message, setMessage] = React.useState<string>('');
  const callback = () => setMessage('');

  return (
    <form className="Footer">
      {isLoggedIn
        ? (
          <>
            <Input onChange={(e) => setMessage(e.target.value)} value={message} />
            <Button type="submit" onClick={(e) => onSubmit(e, message, callback)}>Post</Button>
          </>
        ) : <Button onClick={onLogin}>Sign in using Google to use the chat</Button>}
    </form>
  );
};

export default Footer;
