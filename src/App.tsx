import React, { useRef } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignInButton from './Components/SignInButton';
import Chat from './Components/Chat/Chat';
import { MessageProp } from './Components/types';
import fireConfig from './utils';

firebase.initializeApp(fireConfig);

const Auth = firebase.auth();
const firestore = firebase.firestore();

const signIn = () => Auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
const signOut = () => Auth.signOut();

const App:React.FC = () => {
  const [user] = useAuthState(Auth);
  const [message, setMessage] = React.useState<string>('');

  const messagesRef = firestore.collection('messages');
  const [messages] = useCollectionData<MessageProp>(messagesRef.orderBy('createdAt'), {
    idField: 'id',
  });

  const postMessage = (e) => {
    e.preventDefault(); // <form /> is such a pos sometimes

    messagesRef.add({
      message,
      userId: Auth.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      userProfile: Auth.currentUser.photoURL,
    }).then(() => setMessage(''));
  };

  return (
    <div className="App">
      {user && <p> LOGGED IN!!! </p>}
      <SignInButton onClick={signIn} />
      <Chat messages={messages} userId={Auth?.currentUser?.uid} />
      {user && (
      <>
        <button onClick={signOut}>SIGN OUT?</button>
      </>
      )}
      <form>
        <input onChange={(e) => setMessage(e.target.value)} value={message} />
        <button type="submit" onClick={postMessage}>Post</button>
      </form>
    </div>
  );
};

export default App;
