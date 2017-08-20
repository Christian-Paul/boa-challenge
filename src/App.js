import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar page='Sports Magazine' />
      </div>
    );
  }
}

export default App;
