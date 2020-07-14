import React from 'react'
import './Comments.css'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: null,
      comment: null,
      movieID: 0
    }
  }

postComment() {
   fetch('/api/v1/comments', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
  })
}

  onSubmitHandler = (event) => {
    this.setState({ comment: event.target.value, movieID:this.props.movieId, author:this.props.user.name })
    this.postComment()
  }

  render() {
    return (
      <main>
        <h1>Comments</h1>
          <input name='commented' onChange={this.onSubmitHandler.bind(this)} value={this.state.comment} className='comment-input' placeholder='Leave a Comment!'></input>
          <button onClick={this.onSubmitHandler} className='comments-btn'>SUBMIT</button>
          <section className='commented-section'>
    <h2 className='commented-header' name='comment-header' value={this.state.author}>{this.state.author}</h2>
        <p className='commented-body'></p>
        </section>
        </main>
          
    )}
    


}






export default Comments