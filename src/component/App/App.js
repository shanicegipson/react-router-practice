import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import Home from '../Home/Home.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Contact from '../Contact/Contact.js';

class App extends Component {
  render(){
    return (
      <Router>
        <div className='app'>
        <ul>
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-link">
              <Link to="/contact">Contact</Link>
            </li>
        </ul>
        </div>
        <br />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
    
}

export default App;
