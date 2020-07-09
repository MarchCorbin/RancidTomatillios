export const fetchUserRatingsData = (userId) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`)
  .then(res => res.json())
}

export const fetchAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
      throw new Error('Something went wrong...')
      }
    }
  )
}

export const fetchSingleUserData = (postInput) => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postInput)
  })
}

export const fetchSingleMovie = (movieID) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
  .then(response => response.json())
}