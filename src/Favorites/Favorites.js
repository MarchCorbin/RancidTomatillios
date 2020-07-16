import React, { Component } from 'react'
import { fetchAllMovies, fetchFavoriteMovies } from '../fetchCalls/fetchCalls'
import MovieCard from '../MovieCardContainer/MovieCardContainer'
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer'
import './Favorites.css'

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
      })
  }

  render() {
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
          <section className='no-movies-msg'>
            <h1 className='msg'>No movies favorited.</h1> 
            <h1>Go back and add some!</h1>
          </section>
        }
      </main>
    )
  }
}

export default Favorites