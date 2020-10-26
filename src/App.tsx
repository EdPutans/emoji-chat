import React from 'react';
// eslint-disable-next-line import/no-duplicates
import 'firebase/firestore';
// eslint-disable-next-line import/no-duplicates
import 'firebase/auth';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Filter from 'bad-words';
import fireConfig, { getEmojis, verySlowModifyMessageWithEmojis } from './utils';

import './App.scss';
import Chat from './Components/Chat/Chat';
import { MessageProp } from './Components/types';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Button from './Components/Button/Button';

const NaughtyFilter = new Filter();

firebase.initializeApp(fireConfig);

const Auth = firebase.auth();
const firestore = firebase.firestore();
const signIn = () => Auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
const signOut = () => Auth.signOut();

const App:React.FC = () => {
  const messagesRef = firestore.collection('messages');
  const [messages] = useCollectionData<MessageProp>(messagesRef.orderBy('createdAt', 'desc').limit(30), {
    idField: 'id',
  });
  const [user] = useAuthState(Auth);
  const [emojis, setEmojis] = React.useState([]);

  const postMessage = (e, message, callback) => {
    e.preventDefault(); // <form /> is such a pos sometimes
    let messageToSend;

    if (NaughtyFilter.isProfane(message)) {
      messageToSend = 'I tried to use naughty language but failed miserably';
    } else {
      messageToSend = verySlowModifyMessageWithEmojis(message, emojis);
    }

    messagesRef.add({
      message: messageToSend,
      displayName: user?.displayName,
      userId: user?.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      userProfile: user?.photoURL,
    }).then(callback);
  };

  React.useEffect(() => {
    getEmojis().then((r) => setEmojis(r));
  }, []);

  if (!messages || !emojis.length) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="App">

      <div className="App_content">
        {user ? (
          <>
            <Header onSignOut={signOut} />
            <Chat messages={messages.reverse()} user={user} />
            <Footer onSubmit={postMessage} />
          </>
        )
          : <Button onClick={signIn}>Sign in using Google to use the chat</Button>}
      </div>
    </div>
  );
};

export default App;
