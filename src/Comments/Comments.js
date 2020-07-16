import React from 'react'
import './Comments.css'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: null,
      comment: null,
      movieID: null,
      currentComments: []
    }
  }

  componentDidUpdate()  {
    fetch('http://localhost:3001/api/v1/comments')
      .then(res => res.json())
      .then(data => this.filterComments(data))
    }

  filterComments = (data) => {
    let filtered = data.filter(entry => entry.movieID == this.props.movieId)
    const movieComments = filtered.map(thought => {
      return(
        <div className='each-comment'>
          <h5>{thought.author}</h5>
          <p>{thought.comment}</p>
        </div> 
      )
    })
    this.setState({currentComments: movieComments})
  }

  postComment() {
    fetch('http://localhost:3001/api/v1/comments', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        author: this.state.author, 
        comment: this.state.comment, 
        movieID: this.state.movieID })
    })
    .catch(err => console.log(err))
  }

  handleClick = async () => {
    await this.setState(
      { 
        author: this.props.user.name, 
        movieID: this.props.movieId
      }
    )
    this.postComment()
    this.clearInput()
  }

  clearInput() {
    this.setState({comment: ''})
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value })
  }

  render = () => {
    return (
      <main>
        <h1>Comments</h1>
        {this.props.user ? 
          <section className='comment-form'>
            <input 
              name='commented' 
              className='comment-input' 
              type="text" 
              onChange={(event) => this.handleChange(event)} 
              value={this.state.comment}
              placeholder='Leave a Comment!'>
            </input>
            <button 
              onClick={() => this.handleClick()}
              className='comments-btn'>
              SUBMIT
            </button>
          </section> : 
          <h3 className='placeholder-text'>Login to Comment</h3>
        }
        {this.state.currentComments ? 
          <section className='commented-section'>
            <p className='commented-body'>{this.state.currentComments}</p>
          </section> :
          <h5 className='placeholder-text'>Be the first to comment on this movie!</h5>
        }
      </main>
          
    )}
    


}






export default Comments