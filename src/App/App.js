import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import SingleMovieDetails from '../SingleMovieDetails/SingleMovieDetails.js';
import Home from '../Home/Home.js'
import ErrorPage from '../ErrorPage/ErrorPage'
import { fetchUserRatingsData } from '../fetchCalls/fetchCalls'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      error: '',
      currentUserRatings: []
    }
    console.log(this.state)
  }

  fetchUserRatings = (data) => {
    let userId = data.user.id
    fetchUserRatingsData(userId)
      .then(data => this.setState({
        currentUserRatings: data.ratings
      }))
      .then(console.log('GET'))
      .catch(err => <Redirect to='/error' />)
  }
 
  getCurrentUser = (data) => {
    this.setState({ currentUser: data.user})
  }

  logOutUser = () => {
    this.setState({ currentUser: null })
  }

  render () {
    return (
      <Router>
        <Route exact path="/">
          <Home 
            currentUser={this.state.currentUser} 
            currentUserRatings={this.state.currentUserRatings}
            getCurrentUser={this.getCurrentUser}
            logOutUser={this.logOutUser}
            fetchUserRatings={this.fetchUserRatings}
          />
        </Route>
        <Route path='/movies/:id'>
          <SingleMovieDetails 
            currentUser={this.state.currentUser} 
            currentUserRatings={this.state.currentUserRatings}
            fetchUserRatings={this.fetchUserRatings}
          />
        </Route>
        <Route path='/error'>
          <ErrorPage />
        </Route>
      </Router>
    )
  }
}

export default App;
