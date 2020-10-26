import React, { FC } from 'react';
import './styles.scss';

interface Props {
    onSignIn: ()=>void
    onSignOut: ()=>void
    isSignedIn: boolean
}

const Header:FC<Props> = ({ onSignIn, onSignOut, isSignedIn }) => (
  <div className="Header">
    <button type="button" className="Header_button" tabIndex={0} onClick={isSignedIn ? onSignOut : onSignIn}>
      {isSignedIn ? 'Sign out' : 'Sign in using Google to use the chat'}
    </button>
  </div>
);

export default Header;
