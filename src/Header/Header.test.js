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

  it('Should render a generic greeting if there is no current user', () => {
    const currentUser=null
    const { getByText } = render(<Header currentUser={ currentUser }/>)
    const linkElement = getByText(/Welcome/i)
    expect(linkElement).toBeInTheDocument()
  });

  it('Should render a login button', () => {
    const currentUser=null
    const { getByText } = render(<Header currentUser={ currentUser }/>)
    const button = getByText(/Login/i)
    expect(button).toBeInTheDocument()
  });

  it('Should show a login page on button click', () => {
    const mockLoginLogout = jest.fn()
    const { getByRole } = render(
      <Header 
        currentUser={null}
        loginLogout={mockLoginLogout}
      />
    )
    const button = getByRole('button')
    fireEvent.click(button)
    expect(mockLoginLogout).toBeCalledTimes(1)
  })
})