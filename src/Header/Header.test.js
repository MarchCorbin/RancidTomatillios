import React from 'react'
import Header from './Header'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom' 

describe('Header', () => {
  it('Should render the title', () => {
    const currentUser={name: 'Bob'}
    const { getByText } = render(<Header currentUser={ currentUser }/>)
    const linkElement = getByText(/Rancid Tomatillos/i)
    expect(linkElement).toBeInTheDocument()
  });

  it('Should render a greeting if there is a current user', () => {
    const currentUser={name: 'Bob'}
    const { getByText } = render(<Header currentUser={ currentUser }/>)
    const linkElement = getByText(/Welcome, Bob/i)
    expect(linkElement).toBeInTheDocument()
  });

  // it('Should throw error if current user has no name property', () => {
  //   const currentUser={firstName: 'Bob'}
  //   const { getByText } = render(<Header currentUser={ currentUser }/>)
  //   const linkElement = getByText(/Welcome, Bob/i)
  //   expect(linkElement).toBeInTheDocument()
  // });

  it('Should render a generic greeting if there is no current user', () => {
    const currentUser=null
    const { getByText } = render(<Header currentUser={ currentUser }/>)
    const linkElement = getByText(/Welcome/i)
    expect(linkElement).toBeInTheDocument()
  });

  it('Should render a login button', () => {
    const currentUser=null
    const { getByText } = render(<Header currentUser={ currentUser }/>)
    const linkElement = getByText(/Login/i)
    expect(linkElement).toBeInTheDocument()
  });
})