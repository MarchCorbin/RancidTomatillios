import React from 'react'
import MovieCard from './MovieCard'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom' 

describe('MovieCard', () => {
  it('should render a poster', () => {
    const { getByAltText } = render(
      <MovieCard 
        poster='http://pics.com'
        title='Boondock Saints'
        releaseDate='1999-11-19'
        avgRating={7.8}
      />)
    const linkElement = getByAltText(/Movie poster for Boondock Saints/i)
    expect(linkElement).toBeInTheDocument()
  });

  it('should render a title', () => {
    const { getByText } = render(
      <MovieCard 
        poster='http://pics.com'
        title='Boondock Saints'
        releaseDate='1999-11-19'
        avgRating={7.8}
      />)
    const linkElement = getByText(/Boondock Saints/i)
    expect(linkElement).toBeInTheDocument()
  });

  it('should render a release date', () => {
    const { getByText } = render(
      <MovieCard 
        poster='http://pics.com'
        title='Boondock Saints'
        releaseDate='1999-11-19'
        avgRating={7.8}
      />)
    const linkElement = getByText(/1999-11-19/i)
    expect(linkElement).toBeInTheDocument()
  });

  it('should render a average rating', () => {
    const { getByText } = render(
      <MovieCard 
        poster='http://pics.com'
        title='Boondock Saints'
        releaseDate='1999-11-19'
        avgRating={7.8}
      />)
    const linkElement = getByText(/7.8/i)
    expect(linkElement).toBeInTheDocument()
  });
})