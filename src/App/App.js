import React, { Component } from 'react';
import Home from '../Home/Home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SingleMovieDetails from '../SingleMovieDetails/SingleMovieDetails.js';
import Header from '../Header/Header'

class App extends Component {
 
  

  
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/movies/:id'>
              <SingleMovieDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
