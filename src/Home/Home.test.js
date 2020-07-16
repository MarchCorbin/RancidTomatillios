import React from 'react'
import Home from './Home'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom' 




describe('Home', () => {
  it('should render a <MovieCardContainer />', () => {
    const { getByText, getByTestId } = render(
      <Home 
        currentUser={null}
      />)
    const movieCardContainer = getByTestId('card-container')
    expect(movieCardContainer).toBeInTheDocument()
  })
})