import React, { Component } from 'react';
import Header from '../Header/Header'
import './App.css';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import Login from '../Login/Login.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      allMovies: [],
      isLoginOpen: false

    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => {this.setState({allMovies: data.movies})})
        // (error) => {
        //     this.setState({
      
      // .then(console.log(this.state.allMovies))
  }

  getCurrentUser = (data) => {
    this.setState({ currentUser: data.user})
  }

  toggleLoginDisplay = () => {
    this.setState({isLoginOpen: !this.state.isLoginOpen})
  }

  render() {
    return (
      <main>
        <Header toggleLoginDisplay={this.toggleLoginDisplay} currentUser={this.state.currentUser}/>
        {this.state.isLoginOpen && <Login getCurrentUser={this.getCurrentUser} toggleLoginDisplay={this.toggleLoginDisplay}/>}
        <MovieCardContainer allMovies={this.state.allMovies} />
      </main>
    )
  }
}

export default App;
