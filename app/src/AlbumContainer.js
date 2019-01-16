import React, { Component } from 'react';
import { getAlbums } from "./Functions";
import AlbumCard from './AlbumCard'
import './App.css'

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
    const albumArray = [];
    if(this.state.updated){
      this.state.albums.forEach((album)=>{
        albumArray.push(
          <AlbumCard
            image={album.image}
            albumName={album.name}
            releaseYear={album.releaseYear}
            tracks={album.tracks}
          />
        )
      });
    }
    return(
      <div className="app-card-list">
        {albumArray}
      </div>
    )
  }
}

export default AlbumContainer;
