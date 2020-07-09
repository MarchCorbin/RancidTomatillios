import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { fetchUserRatingsData } from '../fetchCalls/fetchCalls';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, 'Props')
    this.state = {
      rating: null
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

  onStarClick(nextValue, prevValue, name) {
    if (this.state.rating === null){
      this.setState({rating: nextValue});
      console.log('Inside IF')
      this.postUserRating(nextValue)
    } else {
      this.updateRating(prevValue, nextValue)
    }
  }

  postUserRating(rating) {
    const postObj = { "movie_id":this.props.movieId, "rating":rating }
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${this.props.currentUser.id}/ratings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postObj)
    })
    .then(console.log('POST'))
  }

  updateRating = async (prevRating, newRating) => {
    // if (this.props.currentUser !== null) {
      await this.props.deleteRating(prevRating)
  
      await this.postUserRating(newRating)
  
      await this.props.fetchUserRatings()
    // }
  }
 
  render() {
    return (                
      <div>
        <h2>Your Rating: {this.state.rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          // value={this.state.rating ? this.state.rating.rating : this.state.rating}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default Ratings