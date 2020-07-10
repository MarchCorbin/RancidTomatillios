import React, { Component } from 'react';
import Header from '../Header/Header'
import './Home.css';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import Login from '../Login/Login.js'
import ErrorPage from '../ErrorPage/ErrorPage'
import { Redirect } from 'react-router-dom';
import { fetchAllMovies } from '../fetchCalls/fetchCalls'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      isLoginOpen: false,
    }
  }

  componentDidMount() {
    console.log(this.props, 'HOME')
    fetchAllMovies()
      .then(data => {this.setState({allMovies: data.movies})})
      .catch(err => <Redirect to= '/error' />)
  }

  loginLogout = () => {
    this.props.currentUser !== null ?
      this.props.logOutUser() :
      this.toggleLoginDisplay()
  }

  toggleLoginDisplay = () => {
    this.setState({isLoginOpen: !this.state.isLoginOpen})
  }

  render() {
    return (
      <main data-testid='home'>
        <Header 
          loginLogout={this.loginLogout}
          currentUser={this.props.currentUser}
        />
        {this.state.isLoginOpen && 
          <Login 
            getCurrentUser={this.props.getCurrentUser} 
            toggleLoginDisplay={this.toggleLoginDisplay} 
            fetchUserRatings={this.props.fetchUserRatings}
          />
        }
        <MovieCardContainer 
          currentUser={this.props.currentUser}
          allMovies={this.state.allMovies}
          currentUserRatings={this.props.currentUserRatings}
        />
      </main>
    )
  }
}

export default Home;
