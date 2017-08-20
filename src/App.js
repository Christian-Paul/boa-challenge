import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
//import SettingsContainer from './containers/SettingsContainer.js';
import Settings from './components/Settings.jsx';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar page='Sports Magazine' />
        <Settings />
      </div>
    );
  }
}

export default App;
