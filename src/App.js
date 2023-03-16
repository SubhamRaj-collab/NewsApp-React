import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar.js';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  // c = "Hero"
  // apiKey = "0073dba0dd5a486c9dcbf5c025e7fa33";
  apiKey2 = "dbde531df1144f1aa606fb2b8254b803";

  render() {
    return (
      <div>
        {/* Subham Raj is a {this.c} */}
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={12} apiKey = {this.apiKey2} country="us" category="general"/>} />
            <Route exact path="/business" element={<News key="business" pageSize={12} apiKey = {this.apiKey2} country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={12} apiKey = {this.apiKey2} country="us" category="entertainment"/>} />
            <Route exact path="/health" element={<News key="health" pageSize={12} apiKey = {this.apiKey2} country="us" category="health"/>} />
            <Route exact path="/science" element={<News key="science" pageSize={12} apiKey = {this.apiKey2} country="us" category="science"/>} />
            <Route exact path="/sports" element={<News key="sports" pageSize={12} apiKey = {this.apiKey2} country="us" category="sports"/>} />
            <Route exact path="/technology" element={<News key="technology" pageSize={12} apiKey = {this.apiKey2} country="us" category="technology"/>} />
          </Routes>
          
        </Router>
      </div>
    )
  }
}

