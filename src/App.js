import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Sheet from './components/Sheet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <h1> First Sheet </h1>

        <Sheet title="Vampire: The Masquerade" />
        
      </div>
    );
  }
}

export default App;
