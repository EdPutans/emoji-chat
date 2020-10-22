import React from 'react';
import './App.css';

import fbase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignInButton from './Components/SignInButton';

fbase.initializeApp({

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
