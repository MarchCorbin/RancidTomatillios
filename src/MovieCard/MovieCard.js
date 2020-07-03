import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
    return (
      <section className='movie-card' key={props.id}>
        <a>
          <img 
            className='card-poster' 
            src={props.poster} 
            alt={`Movie poster for ${props.title}`}/>
        </a>
        <p className='movie-card-title'>{props.title}</p>
        <p className='release-date'>Release Date: {props.releaseDate}</p>
        <p className='avg-rating'>Average rating: {(props.avgRating).toFixed(1)}</p>
      </section>
    )
  }
export default MovieCard