import React, { Component } from 'react'
import './MovieCard.css'

class MovieCard extends Component{
  constructor() {
    super()
    this.state={
      id: 475430,
      poster: "https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
      title: "Artemis Fowl",
      releaseDate: "2020-06-12",
      avgRating: 5,
    }
  }

  render() {
    return (
      <section>
        <a>
          <img src={this.state.poster} />
        </a>
        <p className='movie-card-title'>{this.state.title}</p>
        <p className='release-date'>{this.state.releaseDate}</p>
        <p className='avg-rating'>{this.state.avgRating}</p>
      </section>
    )
  }
}

export default MovieCard