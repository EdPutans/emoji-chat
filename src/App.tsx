import React from 'react';
// eslint-disable-next-line import/no-duplicates
import 'firebase/firestore';
// eslint-disable-next-line import/no-duplicates
import 'firebase/auth';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import fireConfig from './utils';

import './App.scss';
import Chat from './Components/Chat/Chat';
import { MessageProp } from './Components/types';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

firebase.initializeApp(fireConfig);

const Auth = firebase.auth();
const firestore = firebase.firestore();

const signIn = () => Auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
const signOut = () => Auth.signOut();

const App:React.FC = () => {
  const [user] = useAuthState(Auth);

  const messagesRef = firestore.collection('messages');
  const [messages] = useCollectionData<MessageProp>(messagesRef.orderBy('createdAt'), {
    idField: 'id',
  });

  const postMessage = (e, message, callback) => {
    e.preventDefault(); // <form /> is such a pos sometimes

    messagesRef.add({
      message,
      displayName: user?.displayName,
      userId: user?.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      userProfile: user?.photoURL,
    }).then(callback);
  };

  if (!messages) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="App">
      <div className="App_content">
        <Header onSignIn={signIn} onSignOut={signOut} isSignedIn={Boolean(Auth.currentUser)} />
        <Chat messages={messages} userId={user?.uid} />
        {user && <Footer onSubmit={postMessage} />}
      </div>
    </div>
  );
};

export default App;
