import React, { useRef } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignInButton from './Components/SignInButton';
// import Chat from './Components/Chat';

firebase.initializeApp({
  // todo: create ENV for all data
});

const Auth = firebase.auth();
const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

const signIn = () => Auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
const signOut = () => Auth.signOut();

const App = () => {
  const [user] = useAuthState(Auth);

  return (
    <div className="App">
      {user && <p> LOGGED IN!!! </p>}
      <SignInButton onClick={signIn} />
      <Chat />
      {user && (
      <>
        <button onClick={signOut}>SIGN OUT?</button>
      </>
      )}
      <header />
    </div>
  );
};

export default App;

const Chat = () => {
  const dumdum = useRef();
  const messagesRef = firestore.collection('messages').get().then((snap) => {
    const res = snap.docs.map((doc) => doc.data());
    console.log(res);
  });
  // const getMessagesQuery = messagesRef.orderBy('createdAt').limit(50);
  // const [messages] = useCollectionData(getMessagesQuery, {
  // snapshotListenOptions: { includeMetadataChanges: true },
  // });
  // console.log(messages);
  return <div />;
};
