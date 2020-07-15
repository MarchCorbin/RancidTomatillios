export const fetchUserRatingsData = async (userId) => {
  return await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`)
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

export const postToFavorites = async (id) => {
  return await fetch('http://localhost:3001/api/v1/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'  
    },
    body: JSON.stringify({'movieID': id})
  })
    .then(res => console.log(res))
    .catch(err => console.error(err))
}

export const getFavorites = async () => {
  return await fetch('http://localhost:3001/api/v1/favorites') 
    .then(res => res.json())
}

export const deleteFromFavorites = async (id) => {
  return await fetch(`http://localhost:3001/api/v1/favorites/${id}`)
    .then(res => console.log(res))
    .catch(err => console.error(err))
}