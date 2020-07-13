import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import SingleMovieDetails from '../SingleMovieDetails/SingleMovieDetails.js';
import Home from '../Home/Home.js'
import ErrorPage from '../ErrorPage/ErrorPage'
import { fetchUserRatingsData } from '../fetchCalls/fetchCalls'
import Login from '../Login/Login'
import Header from '../Header/Header'


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

  fetchUserRatings = async (data) => {
    let userId = data.user.id
    return await fetchUserRatingsData(userId)
      .then(data => {
        console.log("1) fetchUserRatings BEFORE🔫: ", this.state.currentUserRatings)
        this.setState({currentUserRatings: data.ratings})
        console.log("2) fetchUserRatings AFTER🔥: ", data.ratings)
        return data
      })
      .catch(err => <Redirect to='/error' />)
  }

  loginLogout = () => {
    this.state.currentUser !== null &&
      this.setState({ currentUser: null })
    // this.toggleLoginDisplay()
  }
 
  getCurrentUser = (data) => {
    this.setState({ currentUser: data.user})
  }

  // logOutUser = () => {
  //   this.setState({ currentUser: null })
  // }

  render () {
    console.log('RERENDER APP')

    return (
      <Router>
      <Switch>
        <Route exact path="/">
          <Header 
            loginLogout={this.loginLogout}
            currentUser={this.state.currentUser}
          />
          <Home 
            currentUser={this.state.currentUser} 
            currentUserRatings={this.state.currentUserRatings}
            logOutUser={this.logOutUser}
          />
        </Route>
        <Route path='/login'>
          <Login 
            getCurrentUser={this.getCurrentUser} 
            fetchUserRatings={this.fetchUserRatings}
            currentUser={this.state.currentUser}
          />
        </Route>
        <Route path='/movies/:id'>
          <Header 
            loginLogout={this.loginLogout}
            currentUser={this.state.currentUser}
          />
          <SingleMovieDetails 
            currentUser={this.state.currentUser} 
            currentUserRatings={this.state.currentUserRatings}
            fetchUserRatings={this.fetchUserRatings}
          />
        </Route>
        <Route path='/error'>
          <ErrorPage />
        </Route>
      </Switch>
      </Router>
    )
  }
}

export default App;
