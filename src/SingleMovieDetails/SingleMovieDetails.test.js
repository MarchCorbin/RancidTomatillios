import React from 'react'
import SingleMovieDetails from './SingleMovieDetails'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('SingleMovieDetails', () => {

  it('should be true', () => {
    expect(true).toEqual(true)
  })

  it('should render a header and a movie details section on the page', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SingleMovieDetails />
      </BrowserRouter>
    )
    const header = getByTestId('header')
    const movieDetails = getByTestId('movie-details')
    expect(header).toBeInTheDocument()
    expect(movieDetails).toBeInTheDocument()
  })
})