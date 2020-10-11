import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A failed <code>App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.REACT_APP_NOT_SECRET_CODE}
        </a>
      </header>
      <Login />
    </div>
  );
}

export default App;
