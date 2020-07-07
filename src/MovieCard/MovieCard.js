import React from 'react'
import PropTypes from 'prop-types'
import './MovieCard.css'
import {Link} from 'react-router-dom'

function MovieCard({ id, poster, title, releaseDate, avgRating, currentUser }) {
    return (
      <Link to ={
        {
          pathname: `/movies/${id}`, 
          state:{ id: id }
        }
      }>
        <section className='movie-card' key={id}>
          <img 
            className='card-poster' 
            src={poster} 
            alt={`Movie poster for ${title}`}
          />
          <p className='movie-card-title'>{title}</p>
          <p className='release-date'>Release Date: {releaseDate}</p>
          <p className='avg-rating'>Average Rating: {avgRating}</p>
          {currentUser && <p className='current-user-rating'>Your Rating: </p>}
        </section>
      </Link>
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