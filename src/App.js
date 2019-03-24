import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Lukasijus react app on gh-pages.
          </p>
          <a
            className="App-link"
            href="https://lukasijus.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Checkout Lukasijus
          </a>
        </header>
      </div>
    );
  }
}

export default App;
