import React, { Component } from 'react';
import Header from './Header'
import './App.css';
import MovieCardContainer from './MovieCardContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      allMovies: []

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

  render() {
    return (
      <main>
        <Header currentUser={this.state.currentUser}/>
        <MovieCardContainer allMovies={this.state.allMovies} />
      </main>
    )
  }
}

export default App;
