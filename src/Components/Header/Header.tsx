import React, { FC } from 'react';
import Button from '../Button/Button';
import './styles.scss';

interface Props {
    onSignOut: ()=>void
}

const Header:FC<Props> = ({ onSignOut }) => (
  <div className="Header">
    <Button onClick={onSignOut}>
      Sign out
    </Button>
  </div>
);

export default Header;
