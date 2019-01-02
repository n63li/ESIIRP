import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import AlbumModal from "./AlbumModal";

class AlbumCard extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <Card>
        <Image src={this.props.image} />
        <Card.Content>
          <Card.Header>{this.props.albumName}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.releaseYear}</span>
          </Card.Meta>
        </Card.Content>
        <AlbumModal
          albumTitle = {this.props.albumName}
          image = {this.props.image}
          tracks = {this.props.tracks}
        />
      </Card>
    )
  }
}

export default AlbumCard;
