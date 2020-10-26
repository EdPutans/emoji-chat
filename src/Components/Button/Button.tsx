import React from 'react';
import './styles.scss';

type ButtonProps= {
  type?: 'button' | 'submit' | 'reset'
  onClick?: (...args) => any
  children: any
}

const Button: React.FC<ButtonProps> = ({
  type = 'button', children, onClick, ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button tabIndex={0} type={type} className="Button" {...props} onClick={onClick}>{children}</button>
);

export default Button;
