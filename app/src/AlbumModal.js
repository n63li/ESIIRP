import React, { Component } from 'react';
import {Button, Header, Image, Modal} from 'semantic-ui-react'
import TrackList from './TrackList'
import SpotifyPlayer from './SpotifyPlayer';
import Graph from './Graph';
import './App.css';

class AlbumModal extends Component{
  constructor(){
    super();
    this.state={
      isOpen: false,
      tracks: {}
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render(){
    return(
      <div>
        <Button onClick={this.toggleModal}>Album Information</Button>
        <Modal open={this.state.isOpen} onClose={this.toggleModal} >
          <Modal.Header>{this.props.albumTitle}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={this.props.image}/>
            {/*<SpotifyPlayer/>*/}
            <Modal.Description>
              <Header>Musical Metadata</Header>
              <Graph id={this.props.albumTitle} tracks={this.props.tracks[0] && this.props.tracks}/>
              <Header>Tracks</Header>
              <TrackList tracks={this.props.tracks[0] && this.props.tracks}/>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default AlbumModal;
