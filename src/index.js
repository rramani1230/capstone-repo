import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingScreen from './Components/LandingScreen/LandingScreen';
import SignUpScreen from './Components/SignUpScreen/SignUpScreen';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LandingScreen/>
  // <SignUpScreen/>
);

