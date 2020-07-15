import React, { Component } from 'react';
import './Home.css';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import { Redirect } from 'react-router-dom';
import { fetchAllMovies } from '../fetchCalls/fetchCalls'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allMovies: [],
    }
  }

  componentDidMount() {
    // console.log(this.props, 'HOME')
    fetchAllMovies()
      .then(data => {this.setState({allMovies: data.movies})})
      .catch(err => <Redirect to= '/error' />)
  }

  render() {
    return (
      <main data-testid='home'>
        <MovieCardContainer 
          currentUser={this.props.currentUser}
          allMovies={this.state.allMovies}
          currentUserRatings={this.props.currentUserRatings}
          renderHeart={this.props.renderHeart}
          toggleFavorite={this.props.toggleFavorite}
        />
      </main>
    )
  }
}

export default Home;
