import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from "./components/Home"
import About from "./components/About"
import Topics from "./components/Topics"

import Tracer from './web-tracer.js';

Tracer('example-react-load')


ReactDOM.render(
  <Router>
      
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
        <hr />

        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics" element={<Topics />} />
        </Routes>
      </div>
      
    </Router>,
  document.getElementById('root')
);