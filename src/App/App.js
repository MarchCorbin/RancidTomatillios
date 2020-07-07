import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SingleMovieDetails from '../SingleMovieDetails/SingleMovieDetails.js';
import Home from '../Home/Home.js'

// Layout component ?
// store currentUser in state
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            {/* <Layout> */}
            <Home />
            {/* </Layout> */}
          </Route>
          <Route path='/movies/:id'>

            <SingleMovieDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
