import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';
import { fetchAllMovies } from '../fetchCalls/fetchCalls'

jest.mock('../fetchCalls/fetchCalls')

describe('App', () => {

  fetchAllMovies.mockResolvedValue({
    movies: [
      {
        "id": 475430,
        "poster_path": "https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
        "title": "Artemis Fowl",
        "average_rating": 3.5714285714285716,
        "release_date": "2020-06-12"
      }, {
        "id": 338762,
        "poster_path": "https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//lP5eKh8WOcPysfELrUpGhHJGZEH.jpg",
        "title": "Bloodshot",
        "average_rating": 5.666666666666667,
        "release_date": "2020-03-05"
      }, {
        "id": 508439,
        "poster_path": "https://image.tmdb.org/t/p/original//f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//dW6yBuKwiMeronJZw8kozYLMorB.jpg",
        "title": "Onward",
        "average_rating": 5.571428571428571,
        "release_date": "2020-02-29"
      }
    ]
  })

  it('should render a <Home /> and <Header /> component', () => {
    const { getByTestId } = render(<App />)

    const header = getByTestId('header')
    const home = getByTestId('home')

    expect(header).toBeInTheDocument()
    expect(home).toBeInTheDocument()
  })

  it('should render the movie cards on load', async () => {
    const { getByText } = render(<App />)
    const titleNumber1 = await waitFor(() => getByText("Artemis Fowl"))
    const titleNumber2 = await waitFor(() => getByText("Bloodshot"))
    const titleNumber3 = await waitFor(() => getByText("Onward"))

    expect(titleNumber1).toBeInTheDocument()
    expect(titleNumber2).toBeInTheDocument()
    expect(titleNumber3).toBeInTheDocument()
  })
})
