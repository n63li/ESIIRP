# Every Song in Its Right Place
This project is my first attempt at creating a React web app. It displays the most popular tracks per album in my
favourite band, Radiohead's, discography. It is a simple app making calls to Spotify's Web API to retrieve musical
metadata for each album and track. Application is based on [create-react-app](https://github.com/facebook/create-react-app)
and [Spotify's Web API Authentication](https://github.com/spotify/web-api-auth-examples)

## Getting Started
### 1) Create an App
- Visit https://developer.spotify.com/
- Log in and create an app
- Enter http//localhost:8888/callback as the redirect uri
- Save your changes
- Copy down the following: Redirect uri, client id, client secret

### 2) Start Authentication Server
- Navigate to the directory auth-server directory `cd auth-server`
- Install the dependencies `npm install`
- Run the server `node auth-server/app.js`

### 3) Start Client
- Navigate to the directory `app`
- Install the dependencies `npm install`
- Run the server `npm start`

### 4) Run the app
- Visit http://localhost:3000
- Click 'Log in with Spotify' and log in
- Navigate through Radiohead's discography and open each album to see the most popular tracks