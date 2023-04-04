import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingScreen from './Components/LandingScreen/LandingScreen';
import './Index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingScreen/>
  </React.StrictMode>
);
