import React from 'react'
import Home from './Home'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom' 




describe('Home', () => {
//   it('should be true', () => {
//     expect(true).toEqual(true)
//   })

  it('should render a <Header /> and a <MovieCardContainer />', () => {
    const { getByText, getByTestId } = render(
      <Home 
        currentUser={null}
      />)
    const header = getByText('Rancid Tomatillos')
    expect(header).toBeInTheDocument()
    const movieCardContainer = getByTestId('card-container')
    expect(movieCardContainer).toBeInTheDocument()
  })
})