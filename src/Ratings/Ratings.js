import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { fetchUserRatingsData } from '../fetchCalls/fetchCalls';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, 'Props')
    this.state = {
      rating: null,

    }
  }
 
  componentDidUpdate = (prevProps) => {
    console.log("6) Ratings - this.props.userRating: ", this.props.userRating)
    console.log("6) Ratings - prevProps.userRating: ", prevProps.userRating)
    if (this.props.userRating !== prevProps.userRating) {
      if (!this.props.userRating) {
        this.setState({ rating: null })
      } else {
        this.setState({ rating:  this.props.userRating.rating })
      }
    }
  } 

  onStarClick(nextValue, prevValue, name) {
    console.log(prevValue, 'PREVIOUS VALUE')
    console.log(nextValue, 'NEXTVALUE')
    if (this.state.rating === null){
      this.setState({rating: nextValue});
      this.postUserRating(nextValue)
    } else {
      this.setState({rating: nextValue});
      this.updateRating(prevValue, nextValue)
    }
  }

  async postUserRating(rating) {
    console.log("4) postUserRating - rating :", rating)
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
    console.log("5) Ratings - user rating: ", this.props.userRating)
    const data = { user: this.props.currentUser }
    if(this.props.userRating){
      await this.props.deleteRating(this.props.userRating.id)
    }
    await this.postUserRating(newRating)
    await this.props.fetchUserRatings(data)
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