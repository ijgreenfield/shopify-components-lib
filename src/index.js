import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './builder-settings';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { builder } from '@builder.io/react';

builder.init("e7b5b04095bd4d0fa1f2f2de2e94936d")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
