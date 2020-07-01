import React, { Component } from 'react'
import './MovieCard.css'

function MovieCard(props) {
    return (
      <section>
        <a>
          <img className='card-poster' src={props.poster} />
        </a>
        <p className='movie-card-title'>{props.title}</p>
        <p className='release-date'>{props.releaseDate}</p>
        <p className='avg-rating'>{props.avgRating}</p>
      </section>
    )
  }
export default MovieCard