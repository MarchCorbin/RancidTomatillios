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
    currentUserRating,
    renderHeart,
    toggleFavorite
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
          <section className='movie-card-info'>
            <div className='movie-card-title-bar'>
              {title.length > 25 ? 
                <p className='movie-card-title'>{title.slice(0, 22)}...</p> : 
                <p className='movie-card-title'>{title}</p>
              }
              {currentUser && 
                <img 
                  className='heart-icon'
                  src={renderHeart(id)} 
                  onClick={() => toggleFavorite(id)}
                />
              }
            </div>
            <p className='release-date'>Release Date: {releaseDate}</p>
            <p className='avg-rating'>Average Rating: {avgRating}</p>
            {currentUser &&
              (currentUserRating ? 
              <p className='current-user-rating'>Your Rating: {currentUserRating.rating}</p> : 
              <p className='current-user-rating'>Your Rating: -</p>)
            }
          </section>
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