const express = require('express')
const { request, response } = require('express')
const app = express()

app.set('port', process.env.PORT || 3001)
app.locals.title = 'Rancid Tomatillos API'

app.use(express.json())

app.locals.comments = []
app.locals.favorites = []

app.get('/', (request, response) => {
  response.send('Rancid Tomatillos API')
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})

app.post('/api/v1/comments', (request, response) => {
  const { author, comment } = request.body
  const id = Date.now()

  for (let requiredParameter of ['author', 'comment']) {
    if (!request.body[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { author: <string>, comment: <string> }.  You are missing a required parameter of ${requiredParameter}.`})
    }
  }

  app.locals.comments.push({ id, author, comment })
  response.status(201).json({ id, author, comment })
})

app.get('/api/v1/comments', (request, response) => {
  response.status(200).json(app.locals.comments)
})

app.post('/api/v1/favorites', (request, response) => {
  if (!request.body.movieID) {
    return response
      .status (422)
      .send({ error: `You are missing the required parameter of the movie ID.`})
  }

  app.locals.favorites.push(request.body)
  response.status(201).json(request.body)
})

app.get('/api/v1/favorites', (request, response) => {
  response.status(200).json(app.locals.favorites)
})