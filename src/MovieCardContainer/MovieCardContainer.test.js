import React from 'react'
import MovieCardContainer from './MovieCardContainer'
import MovieCard from '../MovieCard/MovieCard.js'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom' 

describe('MovieCardContainer', () => {
  it('should render cards to the page', () => {
    const movie1 = 
      <MovieCard 
        id={1}
        poster='http://pics.com'
        title='Boondock Saints'
        releaseDate='1999-11-19'
        avgRating={7.8}
      />

    const movie2 = 
      <MovieCard 
        id={2}
        poster='http://pics.com'
        title='Mean Girls'
        releaseDate='2008-01-24'
        avgRating={5.8}
      />

    const movie3 = 
    <MovieCard 
      id={3}
      poster='http://pics.com'
      title='Pokemon Movie'
      releaseDate='2000-10-21'
      avgRating={6.2}
    />

    const movieCards = [movie1, movie2, movie3]

    const { getByText } = render(<MovieCardContainer allMovies={movieCards}/>)
    // const linkElement = getByText(/ /i)
    expect(linkElement).toBeInTheDocument()
  })
}) 