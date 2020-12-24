import React from 'react'
import MovieCard from './MovieCard'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom' 

describe('MovieCard', () => {
  it('should render a poster', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <MovieCard 
          id={1}
          poster='http://pics.com'
          title='Boondock Saints'
          releaseDate='1999-11-19'
          avgRating={7.8}
        />
      </BrowserRouter>
    )
    const linkElement = getByAltText(/Movie poster for Boondock Saints/i)
    expect(linkElement).toBeInTheDocument()
  });

  it('should render a title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <MovieCard 
          id={1}
          poster='http://pics.com'
          title='Boondock Saints'
          releaseDate='1999-11-19'
          avgRating={7.8}
        />
      </BrowserRouter>
    )
    const linkElement = getByText(/Boondock Saints/i)
    expect(linkElement).toBeInTheDocument()
  });

  it('should render a release date', () => {
    const { getByText } = render(
      <BrowserRouter>
        <MovieCard 
          id={1}
          poster='http://pics.com'
          title='Boondock Saints'
          releaseDate='1999-11-19'
          avgRating={7.8}
        />
      </BrowserRouter>
      )
    const linkElement = getByText(/1999-11-19/i)
    expect(linkElement).toBeInTheDocument()
  });

  it('should render a average rating', () => {
    const { getByText } = render(
      <BrowserRouter>
        <MovieCard 
          id={1}
          poster='http://pics.com'
          title=
          avgRating={7.8}
        />
      </BrowserRouter>
    )
    const linkElement = getByText(/7.8/i)
    expect(linkElement).toBeInTheDocument()
  });
})