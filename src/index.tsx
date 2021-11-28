import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import LoginScreen from './components/LoginScreen/LoginScreen';

ReactDOM.render(
  <React.StrictMode>
    <LoginScreen/>
  </React.StrictMode>,
  document.getElementById('root')
);
