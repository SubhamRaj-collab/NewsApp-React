import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar.js';
import News from './Components/News';

export default class App extends Component {

  c = "Hero"
  render() {
    return (
      <div>
        {/* Subham Raj is a {this.c} */}
        <Navbar/>
        <News/>
      </div>
    )
  }
}

