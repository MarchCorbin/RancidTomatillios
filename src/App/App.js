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
  loginCredentials(e, state) {
    e.preventDefault()
    const postInput = {"email": state.email, "password": state.password}
    console.log('I am working')
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postInput)
    })
    .then(response => response.json())
    .then(data => this.setState({currentUser: data.user}))
  }

  openLogin = () => {
    this.setState({isLoginOpen: true})
  }

  render() {
    return (
      <main>
        <Header openLogin={this.openLogin} currentUser={this.state.currentUser}/>
        {this.state.isLoginOpen && <Login loginCredentials={this.loginCredentials} />}
        <MovieCardContainer allMovies={this.state.allMovies} />
      </main>
    )
  }
}

export default App;
