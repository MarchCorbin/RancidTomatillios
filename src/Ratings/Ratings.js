import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: (props.userRating ? props.userRating.rating : props.userRating)
    }
  }
 
  onStarClick(nextValue, prevValue, name) {
    if(this.state.rating === null){
      this.setState({rating: nextValue});
      this.postUserRating(nextValue)
    } else {
      console.log('we made it')
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
  }
 
  render() {
    console.log(this.props)
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