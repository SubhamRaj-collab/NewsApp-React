import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar.js';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
  

const App = () => {
  // c = "Hero"
  // apiKey = "0073dba0dd5a486c9dcbf5c025e7fa33";
  // apiKey2 = "dbde531df1144f1aa606fb2b8254b803";
  // apiKey3 = "f7f556d6025c4617b60af1f71fd7d09f";

  const apiKey2 = process.env.REACT_APP_NEWS_API;

  const pageSize = 16;

  const [progress, setProgress] = useState(0)

  // setProgress = (progress) =>
  // {
  //   setState({
  //     progress: progress
  //   })
  // }
    return (
      <div>
        {/* Subham Raj is a {c} */}
        <Router>
          <Navbar/>
          <LoadingBar
            color='#3500ff'
            progress={progress}
            waitingTime={1000}
            loaderSpeed={50}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress = {setProgress} key="general" pageSize={pageSize} apiKey = {apiKey2} country="in" category="general"/>} />
            <Route exact path="/business" element={<News setProgress = {setProgress} key="business" pageSize={pageSize} apiKey = {apiKey2} country="in" category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress = {setProgress} key="entertainment" pageSize={pageSize} apiKey = {apiKey2} country="in" category="entertainment"/>} />
            <Route exact path="/health" element={<News setProgress = {setProgress} key="health" pageSize={pageSize} apiKey = {apiKey2} country="in" category="health"/>} />
            <Route exact path="/science" element={<News setProgress = {setProgress} key="science" pageSize={pageSize} apiKey = {apiKey2} country="in" category="science"/>} />
            <Route exact path="/sports" element={<News setProgress = {setProgress} key="sports" pageSize={pageSize} apiKey = {apiKey2} country="in" category="sports"/>} />
            <Route exact path="/technology" element={<News setProgress = {setProgress} key="technology" pageSize={pageSize} apiKey = {apiKey2} country="in" category="technology"/>} />
          </Routes>
          
        </Router>
      </div>
    )
}

export default App;