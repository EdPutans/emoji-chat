import React from 'react';
import Button from '../Button/Button';
import './styles.scss';

interface Props {
    onClose: (...args) => any;
}

const HelpModal: React.FC<Props> = ({ onClose }) => (
  <div className="HelpModal">
    <div className="HelpModal_content">
      <div style={{ marginBottom: 10 }}>
        <h2>Chat boi</h2>
        <h3>A somewhat unusual chat app</h3>
        <p>
          A proof of concept for a chat app utilising React + Firebase + Google sign in.
          It updates messages in real time. Source code can be found
          <a href="https://github.com/EdPutans/emoji-chat">here</a>
          .
        </p>
        <br />

        <p>
          It uses
          <a href="https://emoji-api.com/"> emoji API </a>
          to fetch emojis and if a word in the text matches one fot those - the word will get replaced with an appropriate emoji.
        </p>
        <br />
        <p>
          The app
          <a href="https://www.npmjs.com/package/bad-words"> filters bad words </a>
          , so posting profanity will result in the message getting replaced with a placeholder (or maybe this is just a trick to make you curse without the ability to remove your message. Who knows?).
          <br />
          Annoyingly, the package does sensor arguably harmless words like &quot;hell&quot;, but that&apos;s a compromise I&apos;m willing to live with.
        </p>
        <a href="https://github.com/EdPutans/emoji-chat/issues">Feel free to open an issue if the app isn&apos;t working it they should</a>
      </div>
      <Button onClick={onClose}>Close</Button>
    </div>
  </div>

);

export default HelpModal;
