import React, { useEffect, Fragment } from 'react';
import { SignUpView } from './views'
import './App.css';
import firebase from 'firebase'
import firebaseConfig from './firebase.config';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import { AlertTemplateComponent } from './components';

const alertOptions = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 50000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

function App() {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
  }, []);

  return (
    <AlertProvider template={AlertTemplateComponent} {...alertOptions}>
      <SignUpView />
    </AlertProvider>
  );
}

export default App;
