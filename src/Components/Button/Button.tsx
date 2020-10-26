import React, { ButtonHTMLAttributes } from 'react';
import './styles.scss';

type Props = {
  // todo: take care of this
}

const Button: React.FC<ButtonHTMLAttributes<Props>> = ({ onClick, children, type = 'button' }) => (
  // eslint-disable-next-line react/button-has-type
  <button tabIndex={0} type={type} className="Button" onClick={onClick}>{children}</button>
);

export default Button;
