import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

class TrackList extends Component{
  render(){
    return(
      <List divided ordered animated verticalAlign='middle'>
        {this.props.tracks.map(track => (
          <List.Item>
            <List.Content>
              <List.Header>{track.name}</List.Header>
              <List.Description>Popularity: {track.popularity}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    )
  }
}

export default TrackList;