import React, { FC } from 'react';
import Button from '../Button/Button';
import HelpModal from '../HelpModal/HelpModal';
import './styles.scss';

interface Props {
    onSignOut: ()=>void
}

const Header:FC<Props> = ({ onSignOut }) => {
  const [showHelp, setShowHelp] = React.useState(false);

  return (
    <div className="Header">
      <h2 style={{ color: 'gray' }}>Chat boi</h2>
      <div>
        <Button onClick={() => setShowHelp(true)}>???</Button>
        <Button onClick={onSignOut}>
          Sign out
        </Button>
        {showHelp && (
        <HelpModal onClose={() => setShowHelp(false)} />
        )}
      </div>
    </div>
  );
};

export default Header;
