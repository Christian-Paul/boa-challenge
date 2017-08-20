import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import SettingsContainer from './containers/SettingsContainer.js';
import ModalContainer from './containers/ModalContainer.js';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar page='Sports Magazine' />
        <SettingsContainer />
        {this.props.activeModal && <ModalContainer />}
      </div>
    );
  }
}

export default App;