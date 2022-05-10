import React, { useState } from 'react';
import AntdComp from './components/AntdComp';
import './App.css';
import logo from './logo.svg';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <AntdComp />
  </div>
);

export default App;
