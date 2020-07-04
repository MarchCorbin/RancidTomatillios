import React from 'react'
import './MovieCard.css'
import {Link} from 'react-router-dom'

function MovieCard(props) {
    return (
    <Link to ={{
      pathname: `/movies/${props.id}`, 
      state:{
        id: props.id
      }}}>
      <section className='movie-card' key={props.id}>
          <img 
            className='card-poster' 
            src={props.poster} 
            alt={`Movie poster for ${props.title}`}/>
        
        <p className='movie-card-title'>{props.title}</p>
        <p className='release-date'>Release Date: {props.releaseDate}</p>
        <p className='avg-rating'>Average rating: {(props.avgRating).toFixed(1)}</p>
      </section>
      </Link>
    )
  }
export default MovieCard