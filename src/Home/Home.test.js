import React from 'react'
import Home from './Home'
import { render, fireEvent, within } from '@testing-library/react'
import '@testing-library/jest-dom' 

describe('Home', () => {
  it('should be true', () => {
    expect(true).toEqual(true)
  })

  it('should render a <Header />', () => {
    const { getByText } = render(
      <Home 
        currentUser={null}
      />
    )
    const home = getByText('Rancid Tomatillos')
    expect(home).toBeInTheDocument()
  })

})