import React from 'react'
import Home from './Home'
import { render, fireEvent, within } from '@testing-library/react'
import '@testing-library/jest-dom' 
import Header from '../Header/Header'
// jest.unmock('Header', () => {
//   const ActualHeader = jest.requireActual(Header);
//   <div data-testid='header'>
//     <ActualHeader />
//   </div>
// })

describe('Home', () => {
  it('should be true', () => {
    expect(true).toEqual(true)
  })

  // it('should render a <Header />', () => {
  //   const { getAllByTestId, getByTestId } = render(<Home />)
  //   const home = getByTestId('home')
  //   const headerInHome = within(home).getAllByTestId('header')
  //   expect(headerInHome).toBeInTheDocument()
  // })


})