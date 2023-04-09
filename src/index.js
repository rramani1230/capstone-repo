import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <LandingScreen />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));        
root.render(<App />); //render the App component which has the routes and navigation
