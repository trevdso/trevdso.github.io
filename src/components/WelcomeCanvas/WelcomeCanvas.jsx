import React from 'react';
//import pJson from '../../../package.json';
import './WelcomeCanvas.css';

function WelcomeCanvas() {
  const header = 'Welcome!';
  const message =
    'This page is currently under construction and is looking at an estimated date of October 20th to go live! Cheers and thank you for being patient :)';
  return (
    <div className="container">
      <div className="holder">
        <div className="header">{header}</div>
        <div className="message">
          {message} {/*<div className="font-bold">ver{pJson.version}</div>*/}
        </div>
      </div>
    </div>
  );
}

export default WelcomeCanvas;
