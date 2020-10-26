import React, { FC } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './styles.scss';

interface Props {
    onSubmit: (e, messge, callback) => void
}

const Footer: FC<Props> = ({ onSubmit }) => {
  const [message, setMessage] = React.useState<string>('');
  const callback = () => setMessage('');

  return (
    <form className="Footer">
      <Input onChange={(e) => setMessage(e.target.value)} value={message} />
      <Button type="submit" onClick={(e) => onSubmit(e, message, callback)}>Post</Button>
    </form>
  );
};

export default Footer;
