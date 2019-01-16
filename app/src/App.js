import React, { Component } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js';
import Welcome from './Welcome';
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
      artistID: '',
      artistName: '',
      artistReceived: false
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

  handleArtistInput = (artistIDFromChild) => {
    this.setState({
      artistID: artistIDFromChild.id,
      artistName: artistIDFromChild.name,
      artistReceived: true
    })
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
        {this.state.loggedIn && !this.state.artistReceived && <Welcome onSelectArtist={this.handleArtistInput}/>}
        {this.state.loggedIn && this.state.artistReceived && <h1 className='artist-name'>{this.state.artistName}</h1>}
        {this.state.loggedIn && this.state.artistReceived && <AlbumContainer artistID={this.state.artistID}/>}
      </div>
    );
  }
}

export default App;
