import React from 'react'
import './SingleMovieDetails.css' 
import {withRouter} from 'react-router-dom'
import Ratings from '../Ratings/Ratings'
import { fetchSingleMovie } from '../fetchCalls/fetchCalls'
import Comments from '../Comments/Comments'

class SingleMovieDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: "",
      poster_path: "",
      backdrop_path: "",
      release_date: "",
      overview: "",
      genres: [],
      budget: 0,
      revenue: 0,
      runtime: '',
      tagline: '',
      average_rating: 0,
      user_rating: null
    }
  }

  updateState = data => {
    let movieRating = this.props.currentUserRatings.find(rating => {
     return rating.movie_id === data.movie.id
    })

    // let userRating = this.props.currentUserRatings.find(rating => rating.movie_id === data.movie.id)
    this.setState(
      {
        id: data.movie.id,
        title: data.movie.title,
        poster_path: data.movie.poster_path,
        backdrop_path: data.movie.backdrop_path,
        release_date: data.movie.release_date,
        overview: data.movie.overview,
        genres: data.movie.genres,
        budget: data.movie.budget,
        revenue: data.movie.revenue,
        runtime: data.movie.runtime,
        tagline: data.movie.tagline,
        average_rating: Number((data.movie.average_rating).toFixed(1)),
        user_rating: this.props.currentUserRatings.find(rating => rating.movie_id === data.movie.id)
      }
    )
  }

  deleteRating = async (ratingID) => {    
    const userID = this.props.currentUser.id
    const url = `https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings/${ratingID}`
    return await fetch(url, { method: 'DELETE' })
  }

  reFetchUpdate = () => {
    const movieID = this.props.match.params.id
    fetchSingleMovie(movieID)
      .then(data => this.updateState(data))
  }

  componentDidMount = () => {
    this.reFetchUpdate()
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.currentUserRatings !== prevProps.currentUserRatings) {
      this.reFetchUpdate()
    }
  }

  render() {
    return (
      <main
        className="single-movie-view"
        style={{ backgroundImage: `url(${this.state.backdrop_path})`}}
      >
        <header className="single-movie-header" data-testid='header'>
          <h1 className='movie-title'>{this.state.title}</h1>
          <h4 className="tagline">{this.state.tagline}</h4>
        </header>
        <section className='poster-section' data-testid='movie-details'>
          <img className="poster" alt={`Movie poster for ${this.state.title}`} src={`${this.state.poster_path}`}/>
          <section className='main-details'>
            <p className='avg-rating-fav'>Average Rating: {this.state.average_rating} 
            {this.props.currentUser && 
              <img 
                src={this.props.renderHeart(this.state.id)} 
                onClick={() => this.props.toggleFavorite(this.state.id)}
              />
            }
            </p> 
            <section>
              {this.props.currentUser && 
                <Ratings 
                  reFetchUpdate={this.reFetchUpdate}
                  updateSingleMovieState={this.updateState}
                  currentUser={this.props.currentUser}
                  movieId={this.state.id}
                  userRating={this.state.user_rating}
                  deleteRating={this.deleteRating}
                  fetchUserRatings={this.props.fetchUserRatings}
                />
              }
            </section>
            <p>Synopsis: {this.state.overview}</p>
          </section>
          <section className="misc-details">
            <p>Runtime: {this.state.runtime}</p>
            <p>ReleaseDate: {this.state.release_date}</p>
            <p>Genres: {this.state.genres}</p>
            <p>Budget: {this.state.budget}</p>
            <p>Revenue: {this.state.revenue}</p>
            <section className="comments-section">
              <Comments 
              movieId={this.state.id}
              user={this.props.currentUser}
              rating={this.state.user_rating}
              />
            </section>
          </section>
        </section>  
      </main>
    )
  }
}

export default withRouter(SingleMovieDetails)