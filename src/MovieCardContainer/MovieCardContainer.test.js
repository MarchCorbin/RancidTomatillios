import React from 'react'
import MovieCardContainer from './MovieCardContainer'
import MovieCard from '../MovieCard/MovieCard.js'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom' 
import  { BrowserRouter as Router } from 'react-router-dom'

describe('MovieCardContainer', () => {
  it('should render cards to the page', () => {
    const movie1 = {
       id:1,
        poster_path: 'http://pics.com',
        title:'Boondock Saints',
        release_date: '1999-11-19',
        average_rating: 7.8,
    }

    const movie2 = {
        id:2,
        poster_path: 'http://pics.com',
        title:'Mean Girls',
        release_date: '2008-01-24',
        average_rating: 5.8,
    }

    const movie3 = {
      id:3,
      poster_path: 'http://pics.com',
      title:'Pokemon Movie',
      release_date: '2000-10-21',
      average_rating:6.2,
    }

    let allMovies = [movie1, movie2, movie3]
    const currentUser = {
      name:'benjamin',
      email: 'franklin@yahoo.com',
      password: "newworld"
    }
  const currentUserRatings = [{ user_id:123, movie_id: 1, rating:7 },
  { user_id: 321, movie_id: 2, rating: 7 },
  { user_id: 213, movie_id: 3, rating: 7 }
  ]
    const { getByText } = render(
      <Router> 
        <MovieCardContainer 
          currentUser={currentUser}
          currentUserRatings={currentUserRatings}
          allMovies = { allMovies }
        />
      </Router>)
    const movieTitle1 = getByText('Boondock Saints') 
    const movieTitle2 = getByText('Mean Girls') 
    const movieTitle3 = getByText('Pokemon Movie') 
    expect(movieTitle1).toBeInTheDocument()
    expect(movieTitle2).toBeInTheDocument()
    expect(movieTitle3).toBeInTheDocument()
  })




   // it('should render ALL of the movies on the home page', () => {
  //   const { getByRole, getAllByTestId } = render(<MemoryRouter>
  //   <Home
  //     currentUser={null}
  //     currentUserRatings= {[]}
  //     getCurrentUser={jest.fn()}
  //     logOutUser={jest.fn()}
  //     FetchUserRatings={jest.fn()}

  //   /></MemoryRouter>)
  //   const allMovies = getAllByTestId('movie-card')
  //   expect(allMovies).toHaveLength(40)
  // })
}) 