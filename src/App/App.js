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
import Favorites from '../Favorites/Favorites'
import { fetchUserRatingsData, postToFavorites, getFavorites, deleteFromFavorites } from '../fetchCalls/fetchCalls'
import Login from '../Login/Login'
import Header from '../Header/Header'
import redHeart from '../Assets/heart-red.png'
import yellowHeart from '../Assets/heart-yellow.png'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      error: '',
      currentUserRatings: [],
      currentUserFavorites: []
    }
  }

  fetchUserRatings = async (data) => {
    let userId = data.user.id
    return await fetchUserRatingsData(userId)
      .then(data => {
        // console.log("1) fetchUserRatings BEFORE🔫: ", this.state.currentUserRatings)
        this.setState({currentUserRatings: data.ratings})
        return data
      })
      .catch(err => <Redirect to='/error' />)
  }

  logout = () => {
    this.state.currentUser !== null &&
      this.setState({ currentUser: null })
  }
 
  getCurrentUser = (data) => {
    this.setState({ currentUser: data.user})
  }

  removeFavorite = async (id) => {
    await deleteFromFavorites(id)
    await getFavorites()
    .then(data => this.setState({ currentUserFavorites: data}))
    .catch(err => console.error(err))
  } 
  
  addFavorite = async (id) => {
    await postToFavorites(id)
    await getFavorites()
      .then(data => this.setState({ currentUserFavorites: data}))
      .catch(err => console.error(err))
  }
  
  toggleFavorite = (id) => {
    //toggle icon
    let ids = this.state.currentUserFavorites.map(movie => movie.movieID)
    console.log(ids, 'IDS')
    console.log(id, 'ID')
    if (!ids.includes(id)) {
      this.addFavorite(id)
    } else {
      this.removeFavorite(id)
    }
  }

  getUserFavorites = () => {
    // console.log(getFavorites(), 'getFavorites FN')
    getFavorites()
      .then(data => {
        // console.log(data, 'DATA')
        this.setState({ currentUserFavorites: data})
      })
      .catch(err => console.error(err))
  }

  renderHeart = (id) => {
    let movieIDs = this.state.currentUserFavorites.map(movie => movie.movieID)
    console.log(movieIDs, 'IDS!!!')
    console.log(id, "ID")
    return movieIDs.includes(id) ? redHeart : yellowHeart

  }

  render () {
    // console.log('RERENDER APP')
    return (
      <Router>
      <Switch>
        <Route exact path="/">
          <Header 
            logout={this.logout}
            currentUser={this.state.currentUser}
          />
          <Home 
            currentUser={this.state.currentUser} 
            currentUserRatings={this.state.currentUserRatings}
            logOutUser={this.logOutUser}
            renderHeart={this.renderHeart}
            toggleFavorite={this.toggleFavorite}
          />
        </Route>
        <Route path='/login'>
          <Header 
            loginLogout={this.loginLogout}
            currentUser={this.state.currentUser}
          />
          <Login 
            getUserFavorites={this.getUserFavorites}
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
            renderHeart={this.renderHeart}
            toggleFavorite={this.toggleFavorite}
          />
        </Route>
        <Route path='/favorites'>
          <Header 
            loginLogout={this.loginLogout}
            currentUser={this.state.currentUser}
          />     
          <Favorites 
            currentUser={this.state.currentUser} 
            currentUserRatings={this.state.currentUserRatings}
            favorites={this.state.currentUserFavorites}
            renderHeart={this.renderHeart}
            toggleFavorite={this.toggleFavorite}
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
