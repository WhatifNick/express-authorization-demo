import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Bookmarks from './components/Bookmarks.js';


const Home = () => (
  <div>
    <h1>Welcome to Home</h1>
  </div>
)


class App extends Component {

  

  render() {
    return (
      <div className="App">
      <Router>
        <Fragment>
        <nav>
              <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/bookmarks">Bookmarks</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/bookmarks/stackoverflow">Stack Overflow</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/bookmarks/facebook">Facebook</Link>

        </nav>
            <Route exact path="/" component={Home} />
            <Route exact path="/bookmarks" component={Bookmarks} />
            <Route exact path="/bookmarks/:id" component={Bookmarks} />
            {/* <Route path="/bookmark/stackoverflow" render={(routerProps) => (
            <About {...routerProps} />
          )} /> */}
        </Fragment>
      </Router>

      </div>
    );
  }

  
}

export default App;
