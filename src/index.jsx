import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import './icons.css';
import App from './App';

axios.defaults.baseURL = process.env.REACT_APP_URL_API;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
