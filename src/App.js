import React, { useEffect, Fragment } from 'react';
import { SignUpView } from './views'
import './App.css';
import firebase from 'firebase'
import firebaseConfig from './firebase.config';

function App() {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
  }, []);

  return (
    <Fragment>
      <SignUpView />
    </Fragment>
  );
}

export default App;
