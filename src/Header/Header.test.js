import React from 'react'
import Header from './Header'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom' 
import '@testing-library/jest-dom' 

describe('Header', () => {
  it('Should render the title', () => {
    const currentUser={name: 'Bob'}
    const { getByText } = render(<MemoryRouter><Header currentUser={ currentUser }/></MemoryRouter>)
    const linkElement = getByText(/Rancid Tomatillos/i)
    expect(linkElement).toBeInTheDocument()
  });

  it('Should render a greeting if there is a current user', () => {
    const currentUser={name: 'Bob'}
    const { getByText } = render(<MemoryRouter><Header currentUser={ currentUser }/></MemoryRouter>)
    const linkElement = getByText(/Welcome, Bob/i)
    expect(linkElement).toBeInTheDocument()
  });

  it('Should render a generic greeting if there is no current user', () => {
    const currentUser=null
    const { getByText } = render(<MemoryRouter><Header currentUser={ currentUser }/></MemoryRouter>)
    const linkElement = getByText(/Welcome/i)
    expect(linkElement).toBeInTheDocument()
  });

  it('Should render a login button', () => {
    const currentUser=null
    const { getByText } = render(<MemoryRouter><Header currentUser={ currentUser }/></MemoryRouter>)
    const button = getByText(/Login/i)
    expect(button).toBeInTheDocument()
  });

  it('Should show a login page on button click', () => {
    const mockLogout = jest.fn()
    const { getByText } = render(
      <MemoryRouter>
        <Header 
        currentUser={null}
        logout={mockLogout}
        />
      </MemoryRouter>
    )
    const button = getByText(/Login/i)
    fireEvent.click(button)
    expect(mockLogout).toBeCalledTimes(1)
  })
})