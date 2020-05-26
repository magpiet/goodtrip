import React from 'react';
import logo from './logo192.png';
import './App.css';
import 'tachyons'

function App() {
  return (
    <div className="App">
      <div className="App-header hover-white">
        <img src={logo} className="App-logo" alt="logo" cursor="pointer"/>
        <div className="typewriter">
          <p className="typewriter-text">Hi! My name is Magnus!</p>     
        </div>
      </div>
    </div>
  );
}

export default App;
