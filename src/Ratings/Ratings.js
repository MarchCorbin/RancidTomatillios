import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './Ratings.css'
import { fetchUserRatingsData } from '../fetchCalls/fetchCalls';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,

    }
  }
 
  componentDidUpdate = (prevProps) => {

    if (this.props.userRating !== prevProps.userRating) {
      if (!this.props.userRating) {
        this.setState({ rating: null })
      } else {
        this.setState({ rating:  this.props.userRating.rating })
      }
    }
  } 

  onStarClick(nextValue, prevValue) {
    if (this.state.rating === null){
      this.setState({rating: nextValue});
      this.postUserRating(nextValue)
    } else {
      this.setState({rating: nextValue});
      this.updateRating(prevValue, nextValue)
    }
  }

  async postUserRating(rating) {
    const postObj = { "movie_id":this.props.movieId, "rating":rating }
    return await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${this.props.currentUser.id}/ratings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(postObj)
    })
    .then(res => {
      console.log(res, 'postUserRESPONSE')
      return res
    })
  }

  updateRating = async (prevRating, newRating) => {
    const data = { user: this.props.currentUser }
    if(this.props.userRating){
      await this.props.deleteRating(this.props.userRating.id)
    }
    await this.postUserRating(newRating)
    await this.props.fetchUserRatings(data)
  }

  render() {
    return (                
      <section className='ratings'>
        <p className='single-movie-user-rating'>Your Rating: {this.state.rating}</p>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </section>
    );
  }
}

export default Ratings