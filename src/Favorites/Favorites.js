import React, { Component } from 'react'
import { fetchAllMovies, fetchFavoriteMovies } from '../fetchCalls/fetchCalls'
import MovieCard from '../MovieCardContainer/MovieCardContainer'
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer'

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state={
      favoriteMovies:[]
    }
  }

  componentDidMount = () => {
    let favIDs = this.props.favorites.map(movie => movie.movieID)
    fetchAllMovies()
      .then(data => {
        this.setState({ favoriteMovies: data.movies.filter(movie => favIDs.includes(movie.id))})
        console.log(this.state.favoriteMovies, 'STATE')
      })
  }

  render() {
    console.log(this.props.favorites, 'this.props.favorites')
    return (
      <main>
        {this.state.favoriteMovies.length > 0 ?  
          <MovieCardContainer 
            currentUser={this.props.currentUser}
            allMovies={this.state.favoriteMovies}
            currentUserRatings={this.props.currentUserRatings}
            renderHeart={this.props.renderHeart}
            toggleFavorite={this.props.toggleFavorite}
          /> : 
          <h1>No movies favorited</h1> 
        }
      </main>
    )
  }
}

export default Favorites