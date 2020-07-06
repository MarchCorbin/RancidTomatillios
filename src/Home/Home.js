import React, { Component } from 'react';
import Header from '../Header/Header'
import './Home.css';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import Login from '../Login/Login.js'
import SingleMovieDetails from '../SingleMovieDetails/SingleMovieDetails';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      allMovies: [],
      isLoginOpen: false,
      error: '',
      currentUserRatings: []
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Something went wrong...')
        }
      })
      .then(data => {this.setState({allMovies: data.movies})})
      .catch(err => {this.setState({ error: 'There was an error!  Please try again.'})})
  }

  getCurrentUser = (data) => {
    this.setState({ currentUser: data.user})
  }

  logOutUser = () => {
    this.setState({ currentUser: null })
  }
  
  toggleLoginDisplay = () => {
    this.setState({isLoginOpen: !this.state.isLoginOpen})
  }
  
  loginLogout = () => {
    this.state.currentUser !== null ? 
    this.logOutUser() :
    this.toggleLoginDisplay()
  }

  fetchUserRatings = (data) => {
    let userId = data.user.id
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`)
      .then(res => res.json())
      .then(data => this.setState({ currentUserRatings: data.ratings }))
      // .then(<SingleMovieDetails prophere />)
      .catch(err => console.error(err.message))
  }

  render() {
    return (
      <main data-testid='home'>
        <Header 
          toggleLoginDisplay={this.toggleLoginDisplay} 
          loginLogout={this.loginLogout}
          currentUser={this.state.currentUser}
        />
        {this.state.isLoginOpen && 
          <Login 
            getCurrentUser={this.getCurrentUser} 
            toggleLoginDisplay={this.toggleLoginDisplay} 
            fetchUserRatings={this.fetchUserRatings}
          />
        }
        <MovieCardContainer 
          homeState={this.state}
        />
      </main>
    )
  }
}

export default Home;
