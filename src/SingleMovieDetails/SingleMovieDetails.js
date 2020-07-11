import React from 'react'
import './SingleMovieDetails.css' 
import {withRouter} from 'react-router-dom'
import Ratings from '../Ratings/Ratings'
import { fetchSingleMovie, fetchUserRatingsData } from '../fetchCalls/fetchCalls'

class SingleMovieDetails extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props, 'Single Movie props')
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
    console.log('3) SingleMovieDetails - updateState() - this.props.currentUserRatings: ', this.props.currentUserRatings)
    let movieRating = this.props.currentUserRatings.find(rating => {
     return rating.movie_id === data.movie.id
    })

    console.log("find movie rating: ", movieRating)

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
    console.log("deleteRating ID", ratingID)
    // if (this.props.currentUser) {
      const userID = this.props.currentUser.id
      const url = `https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings/${ratingID}`
      return await fetch(url, { method: 'DELETE' })
    // }
  }

  reFetchUpdate = () => {
    const movieID = this.props.match.params.id
    console.log(movieID)
    fetchSingleMovie(movieID)
      .then(data => this.updateState(data))
  }

  componentDidMount = () => {
    this.reFetchUpdate()
    // .then(this.setState({ user_rating: this.props.currentUserRatings.find(rating => rating.movie_id === this.state.id)}))
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(this.props.currentUserRatings !== prevProps.currentUserRatings) {
      this.reFetchUpdate()
    }
  }

  render() {
    console.log("SingleMovieDetails: this.props.currentUserRatings", this.props.currentUserRatings)
    console.log("SingleMovieDetails: this.state.user_rating", this.state.user_rating)
    // let userRating = this.props.currentUserRatings.find(rating => rating.movie_id === this.state.id)
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
          
          {/* {this.props.currentUser &&
            (this.state.user_rating ? 
            <p className='current-user-rating'>Your Rating: {this.state.user_rating.rating}</p> : 
            <p className='current-user-rating'>Your Rating: -</p>)
          } */}

           <div>
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
           </div>
            <p>Avg Rating: {this.state.average_rating}</p> 
            <p>Synopsis: {this.state.overview}</p>
          </section>
          <section className="misc-details">
            <p>Runtime: {this.state.runtime}</p>
            <p>ReleaseDate: {this.state.release_date}</p>
            <p>Genres: {this.state.genres}</p>
            <p>Budget: {this.state.budget}</p>
            <p>Revenue: {this.state.revenue}</p>
          </section>
        </section>  
      </main>
    )
  }
}

export default withRouter(SingleMovieDetails)