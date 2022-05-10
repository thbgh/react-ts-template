import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// @ts-ignore：不存在属性“createRoot”。ts(2339)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
