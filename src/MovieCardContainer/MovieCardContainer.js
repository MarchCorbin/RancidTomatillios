import React from 'react'
import PropTypes from 'prop-types'
import './MovieCardContainer.css'
import MovieCard from '../MovieCard/MovieCard'

function MovieCardContainer({ currentUser, allMovies, currentUserRatings, renderHeart, toggleFavorite }) {
  const movieCards = allMovies.map(movie => {
    let userRating = currentUserRatings.find(rating => rating.movie_id === movie.id)
    return (<MovieCard 
      key = {movie}
      id = {movie.id}
      poster = {movie.poster_path}
      title = {movie.title}
      releaseDate = {movie.release_date}
      avgRating = {Number((movie.average_rating).toFixed(1))}
      currentUser = {currentUser}
      currentUserRating = {userRating}
      renderHeart={renderHeart}
      toggleFavorite={toggleFavorite}
    />)
  })

  return (
    <section data-testid='card-container' className='movie-card-container'>
      {movieCards}
    </section>
  )
}

export default MovieCardContainer

MovieCardContainer.propTypes = {
  allMovies: PropTypes.array.isRequired
}