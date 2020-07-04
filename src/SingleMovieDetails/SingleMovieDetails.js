import React from 'react'
import './SingleMovieDetails.css' 
import {withRouter} from 'react-router-dom'


class SingleMovieDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        id: 'props',
        title: "The Call of the Wild",
        poster_path: "https://image.tmdb.org/t/p/original//33VdppGbeNxICrFUtW2WpGHvfYc.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//9sXHqZTet3Zg5tgcc0hCDo8Tn35.jpg",
        release_date: "2020-02-19",
        overview: "Buck is a big-hearted dog whose blissful domestic life is turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Yukon during the Gold Rush of the 1890s. As the newest rookie on a mail delivery dog sled team—and later its leader—Buck experiences the adventure of a lifetime, ultimately finding his true place in the world and becoming his own master.",
        genres: [
          "Drama",
          "Adventure",
          "Family"
        ],
        budget: 109000000,
        revenue: 107604626,
        runtime: 100,
        tagline: "Based on the legendary novel",
        average_rating: 9
      
    }
  }

  componentDidMount(props) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(data => console.log(data));
    console.log(this.state)
  }

  render() {
    return (
      <main
      className="background-image" 
      style={{ backgroundImage: `url(${this.state.backdrop_path})`}}>
        <header className="movie-title">{this.state.title}
        <h4 className="tagline">{this.state.tagline}</h4>
        </header>
      <section className='poster-section'>
        <image className="poster" src={this.state.poster_path}/>
        </section>  
        <section className='main-details'></section>
        <section className="misc-details"></section>
      </main>
    )
  }
}

export default withRouter(SingleMovieDetails)