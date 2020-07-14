import React from 'react'
import PropTypes from 'prop-types'
import './MovieCard.css'
import {Link} from 'react-router-dom'

function MovieCard(
  { 
    key,
    id, 
    poster, 
    title, 
    releaseDate, 
    avgRating, 
    currentUser, 
    currentUserRating 
  }) {
    return (
      <section data-testid="movie-card" className='movie-card' key={key}>
        <Link to ={{pathname: `/movies/${id}`, state:{ id: id }}}>
          <img 
            className='card-poster' 
            src={poster} 
            alt={`Movie poster for ${title}`}
          />
        </Link>
        <p className='movie-card-title'>{title}{currentUser && <button>Favorite</button>}</p>
        <p className='release-date'>Release Date: {releaseDate}</p>
        <p className='avg-rating'>Average Rating: {avgRating}</p>
        {currentUser &&
          (currentUserRating ? 
          <p className='current-user-rating'>Your Rating: {currentUserRating.rating}</p> : 
          <p className='current-user-rating'>Your Rating: -</p>)
        }
      </section>
    )
  }
export default MovieCard

MovieCard.propTypes = {
  id: PropTypes.number.isRequired, 
  poster: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  releaseDate: PropTypes.string.isRequired, 
  avgRating: PropTypes.number.isRequired
}