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

const NaughtyFilter = new Filter();

firebase.initializeApp(fireConfig);

const App:React.FC = () => {
  const firestore = firebase.firestore();
  const Auth = firebase.auth();
  const [user] = useAuthState(Auth);
  const [emojis, setEmojis] = React.useState([]);
  const [loadingEmojis, setLoadingEmojis] = React.useState(false);

  const signIn = () => Auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  const signOut = () => Auth.signOut();

  const messagesRef = firestore.collection('messages');
  const [messages, loadingValues] = useCollectionData<MessageProp>(messagesRef.orderBy('createdAt', 'desc').limit(30), {
    idField: 'id',
  });

  const postMessage = (e, message, callback) => {
    e.preventDefault(); // <form /> is such a pos sometimes
    let messageToSend;

    if (NaughtyFilter.isProfane(message)) {
      messageToSend = 'I tried to perform a doozie and used naughty language';
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
    setLoadingEmojis(true);
    getEmojis().then((r) => {
      setEmojis(r);
      setLoadingEmojis(false);
    }).catch((err) => {
      console.error(err);
      setLoadingEmojis(false);
    });
  }, []);

  return (
    <div className="App">
      <div className="App_content">
        <Header onSignOut={signOut} isLoggedIn={Boolean(user)} />
        {(loadingValues || loadingEmojis) ? <h1>loading...</h1>
          : <Chat messages={messages && [...messages].reverse()} userId={user?.uid} />}
        <Footer onSubmit={postMessage} isLoggedIn={Boolean(user)} onLogin={signIn} />
      </div>
    </div>
  );
};

export default App;
