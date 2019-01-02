import React, { Component } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js';
import AlbumContainer from './AlbumContainer';
import { Button } from 'semantic-ui-react'
import Title from './Title'

const spotifyWebApi = new Spotify();

class App extends Component {
  constructor(props){
    super(props);
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token? true : false,
      isOpen: false
    }
    if (params.access_token){
      spotifyWebApi.setAccessToken(params.access_token)
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  render() {
    return (
      <div className="App">
        <Title/>
        {!this.state.loggedIn &&
          <a href="http://localhost:8888/login">
            <Button className="spotify-login-button" size='large'>Login With Spotify</Button>
          </a>
        }
        {this.state.loggedIn && <AlbumContainer/>}
      </div>
    );
  }
}

export default App;
