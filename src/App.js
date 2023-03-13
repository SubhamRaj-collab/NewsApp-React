import './App.css';

import React, { Component } from 'react'

export default class App extends Component {

  c = "Hero"
  render() {
    return (
      <div>
        Subham Raj is a {this.c}
      </div>
    )
  }
}

