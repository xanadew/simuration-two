import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import router from './router.js';
import Auth from './components/Auth';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
{router}
      </div>
    );
  }
}

export default App;
