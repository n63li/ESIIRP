import React, { Component } from 'react';
import {Button, Header, Image, Modal} from 'semantic-ui-react'
import TrackList from './TrackList'

class AlbumModal extends Component{
  constructor(){
    super();
    this.state={
      isOpen: false,
      tracks: {},
      updated: false
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
            <Modal.Description>
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
