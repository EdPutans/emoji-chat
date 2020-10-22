import React from 'react';
import './App.css';

import fbase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignInButton from './Components/SignInButton';

fbase.initializeApp({
  apiKey: 'AIzaSyDvg7xB31ooCOG1tQDVDKr25T3sHnAWIog',
  authDomain: 'emoji-chat-6828e.firebaseapp.com',
  databaseURL: 'https://emoji-chat-6828e.firebaseio.com',
  projectId: 'emoji-chat-6828e',
  storageBucket: 'emoji-chat-6828e.appspot.com',
  messagingSenderId: '321217861790',
  appId: '1:321217861790:web:b1e822ff09e8f7540b838f',
  measurementId: 'G-6QB9M17JVF',
});

const Auth = fbase.auth();
const Fstore = fbase.firestore();

const signIn = () => Auth.signInWithPopup(new fbase.auth.GoogleAuthProvider());
const signOut = () => Auth.signOut();

const App: React.FC = () => {
  const [user] = useAuthState(Auth);

  return (
    <div className="App">
      {user && <p> LOGGED IN!!! </p>}
      <SignInButton onClick={signIn} />
      {user && <button onClick={signOut}>SIGN OUT?</button>}
      <header />
    </div>
  );
};

export default App;
