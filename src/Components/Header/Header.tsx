import React, { FC } from 'react';
import Button from '../Button/Button';
import HelpModal from '../HelpModal/HelpModal';
import './styles.scss';

interface Props {
    onSignOut: ()=>void
    isLoggedIn?: boolean
}

const Header:FC<Props> = ({ onSignOut, isLoggedIn }) => {
  const [showHelp, setShowHelp] = React.useState(false);

  return (
    <div className="Header">
      <h2 style={{ color: '#b32767' }}>Chat boi</h2>
      <div>
        <Button onClick={() => setShowHelp(true)}>Ed, what the hell is this?</Button>
        {isLoggedIn && (
        <Button onClick={onSignOut}>
          Sign out
        </Button>
        )}
        {showHelp && (
        <HelpModal onClose={() => setShowHelp(false)} />
        )}
      </div>
    </div>
  );
};

export default Header;
