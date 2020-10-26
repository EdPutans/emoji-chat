import React from 'react';

interface Props{
    onClick: () => void
    text: string
}

const Button: React.FC<Props> = ({ onClick, text }) => (
  <button type="button" className="Button" onClick={onClick}>{text}</button>
);

export default Button;
