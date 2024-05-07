// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/navbar';
import News from './component/news';
// import About from './component/About';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/"  element={<News key='general'pageSize={10} category="general" />}/>
            <Route exact path="/business"  element={<News key='business'pageSize={10} category="business" />}/>
            <Route exact path="/entertainment"  element={<News key='entertainment'pageSize={10} category="entertainment" />}/>
            <Route exact path="/health"  element={<News key='health'pageSize={10} category="health" />}/>
            <Route exact path="/science"  element={<News key='science'pageSize={10} category="science" />}/>
            <Route exact path="/sports"  element={<News key='sports'pageSize={10} category="sports" />}/>
            <Route exact path="/technology"  element={<News key='technology'pageSize={10} category="technology" />}/>
          </Routes>
          {/* <About /> */}
        </BrowserRouter>
      </div>
    )
  }
}


