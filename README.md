# Rancid Tomatillos
* __Corbin March__ (GitHub: [MarchCorbin](https://github.com/MarchCorbin))
* __Kyle Wong__ (GitHub: [KyleWong2510](https://github.com/KyleWong2510))

## Overview
 Rancid Tomatillos is a movie details and reviewing website. Users can curate a list of favorite movies to reference later and save it to their personal account. Once logged in a user can view a movies details, rate and leave feedback for specific movies. If a user hasnt seen a movie but is still curious about its quality, the movies also present an aggregated average score from all site users as well as allow non subscribers to view the comments for each individual movie.
 Developers have to create and deploy the site as well as a microservice from scratch, get dynamic routing to work appropriately according to each movie clicked, also create redirect functionality in the instance of a 400 level error.


## Startup instructions
Clone down this repository to your local machine.

Once cloned, cd into this repo's directy.

Run npm install.

Run npm start.

In your browser, navigate to localhost:3000.



## Technologies Used
* JavaScript/ES6
* React
* nodemon
* microservice
* express
* Jest
* React Testing library

## Systems Used
* NPM
* GITHUB
* TDD 
* GH Project Board

## Challenges
* Posting to the microserver was a challenge that allowed the team to learn about CORS and how to work with it.
* Updating the comments in real time was a challenge to update and render appropriately. 
* Getting the favoriting functionality to render was a challenge that helped the team learn the importance of async operations.
* Testing in a React environment proved to be a reoccurring challenge for the team.


## Wins
* Gaining significant practice with creating a modular app with an organized directory of responsibilities.
* First time buildiing a microserver and then connecting it to the corresponding app.
* Learned the syntax and many of the intricacies of using and working with React.
* Successfully created a basic application using express.

## Future Iterations
* Planned iterations included integrated trailers within each movie page
* A more robust testing suite
* Search functionality

# Project in Action
## Home Page Layout
![HomePage Layout](src/Assets/ReadmeAssets/Homepage.png)

## Logging in and leaving comments
![Logging in and leaving comments](src/Assets/ReadmeAssets/Logginginandcomment.gif)

## Rating Functionality
![Rating functionality](src/Assets/ReadmeAssets/Ratings.gif)

## Dynamic Routing
![Dynamic Routing](src/Assets/ReadmeAssets/Routing.gif)