import React from 'react'
import SingleMovieDetails from './SingleMovieDetails'

describe('SingleMovieDetails', () => {

  it('should be true', () => {
    expect(true).toEqual(true)
  })

  it('should render text on the page', () => {
    const { getByText } = render(
      <SingleMovieDetails />
    )
  })
})