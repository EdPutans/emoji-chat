import React from 'react';

interface Props{
    onClick: () => void
}
const SignInButton: React.FC<Props> = ({ onClick }) => (
  <button type="button" onClick={onClick}>Log in with Google</button>
);

export default SignInButton;
