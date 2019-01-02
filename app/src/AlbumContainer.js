import React, { Component } from 'react';
import { getAlbums } from "./Functions";
import AlbumCard from './AlbumCard'
import './App.css'

const AMSP = 1;
const TKOL = 3;
const IR = 4;
const HTTT = 6;
const AMN = 7;
const KIDA = 9;
const OKC = 10;
const TB = 11;
const PH = 12;

class AlbumContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      active: 0,
      albums: {},
      updated: false,
      isOpen: false,
    }
  }

  componentDidMount(){
    getAlbums().then((response) => {
      this.setState(() => {
        return {
          updated: true,
          albums: response
        }
      });
    })
  }

  render(){
    return(
      <div className="app-card-list">
        <AlbumCard
          image={this.state.updated && this.state.albums[AMSP].image}
          albumName={this.state.updated && this.state.albums[AMSP].name}
          releaseYear={this.state.updated && this.state.albums[AMSP].releaseYear}
          tracks={this.state.updated && this.state.albums[AMSP].tracks}
        />
        <AlbumCard
          image={this.state.updated && this.state.albums[TKOL].image}
          albumName={this.state.updated && this.state.albums[TKOL].name}
          releaseYear={this.state.updated && this.state.albums[TKOL].releaseYear}
          tracks={this.state.updated && this.state.albums[TKOL].tracks}
        />
        <AlbumCard
          image={this.state.updated && this.state.albums[IR].image}
          albumName={this.state.updated && this.state.albums[IR].name}
          releaseYear={this.state.updated && this.state.albums[IR].releaseYear}
          tracks={this.state.updated && this.state.albums[IR].tracks}
        />
        <AlbumCard
          image={this.state.updated && this.state.albums[HTTT].image}
          albumName={this.state.updated && this.state.albums[HTTT].name}
          releaseYear={this.state.updated && this.state.albums[HTTT].releaseYear}
          tracks={this.state.updated && this.state.albums[HTTT].tracks}
        />
        <AlbumCard
          image={this.state.updated && this.state.albums[AMN].image}
          albumName={this.state.updated && this.state.albums[AMN].name}
          releaseYear={this.state.updated && this.state.albums[AMN].releaseYear}
          tracks={this.state.updated && this.state.albums[AMN].tracks}
        />
        <AlbumCard
          image={this.state.updated && this.state.albums[KIDA].image}
          albumName={this.state.updated && this.state.albums[KIDA].name}
          releaseYear={this.state.updated && this.state.albums[KIDA].releaseYear}
          tracks={this.state.updated && this.state.albums[KIDA].tracks}
        />
        <AlbumCard
          image={this.state.updated && this.state.albums[OKC].image}
          albumName={this.state.updated && this.state.albums[OKC].name}
          releaseYear={this.state.updated && this.state.albums[OKC].releaseYear}
          tracks={this.state.updated && this.state.albums[OKC].tracks}
        />
        <AlbumCard
          image={this.state.updated && this.state.albums[TB].image}
          albumName={this.state.updated && this.state.albums[TB].name}
          releaseYear={this.state.updated && this.state.albums[TB].releaseYear}
          tracks={this.state.updated && this.state.albums[TB].tracks}
        />
        <AlbumCard
          image={this.state.updated && this.state.albums[PH].image}
          albumName={this.state.updated && this.state.albums[PH].name}
          releaseYear={this.state.updated && this.state.albums[PH].releaseYear}
          tracks={this.state.updated && this.state.albums[PH].tracks}
        />
      </div>
    )
  }
}

export default AlbumContainer;
