import React from 'react'
import MovieCardContainer from './MovieCardContainer'
import MovieCard from '../MovieCard/MovieCard.js'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom' 
import  { BrowserRouter as Router } from 'react-router-dom'

describe('MovieCardContainer', () => {
  it('should render cards to the page', () => {
    const movie1 = {
       id:1,
        poster_path: 'http://pics.com',
        title:'Boondock Saints',
        release_date: '1999-11-19',
        average_rating: 7.8,
    }

    const movie2 = {
        id:2,
        poster_path: 'http://pics.com',
        title:'Mean Girls',
        release_date: '2008-01-24',
        average_rating: 5.8,
    }

    const movie3 = {
      id:3,
      poster_path: 'http://pics.com',
      title:'Pokemon Movie',
      release_date: '2000-10-21',
      average_rating:6.2,
    }

    const homeState = {
      allMovies: [movie1, movie2, movie3]
    }
    const { getByText } = render(
      <Router> 
        <MovieCardContainer homeState = { homeState }/>
      </Router>)
    const movieTitle1 = getByText('Boondock Saints') 
    const movieTitle2 = getByText('Mean Girls') 
    const movieTitle3 = getByText('Pokemon Movie') 
    expect(movieTitle1).toBeInTheDocument()
    expect(movieTitle2).toBeInTheDocument()
    expect(movieTitle3).toBeInTheDocument()
  })
}) 