import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This a simple todo app</h1>
        </header>
        <p className="App-intro">
          Lets add Bootstrap
        </p>
        <div class="container">
          <div class="row">
          <div class="col-sm">
            One of three columns
          </div>
          <div class="col-sm">
            One of three columns
          </div>
          <div class="col-sm">
            One of three columns
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
