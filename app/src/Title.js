import React, { Component } from 'react';
import { Icon, Image, List, Modal } from 'semantic-ui-react';
import './App.css'

class Title extends Component{
  constructor(){
    super()
    this.state = {
      isOpen: false
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render(){
    return(
      <section className="app-title">
        <div className="app-title-content">
          <h1>Every Song in Its Right Place</h1>
          <p>Musical data from <Icon name='spotify'/></p>
          <a className="github-button" href='https://github.com/n63li/ESIIRP' target='_blank' rel='noopener noreferrer'>
            <Icon name='github' size='big'/>
          </a>
          <Icon name='info circle' size='big' onClick={this.toggleModal}/>
          <Modal open={this.state.isOpen} onClose={this.toggleModal} centered={false}>
            <Modal.Header>What's that?</Modal.Header>
            <Modal.Content scrolling>
              You may be wondering what all these random statistics pulled from Spotify mean. Do not fear! Thanks to
              <a href='https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/' target='_blank' rel='noopener noreferrer'>
                Spotify's API documentation
              </a>
              , I have compiled a summary of explanations for each metadata parameter below:
              <List celled animated>
                <List.Item>
                  <List.Content>
                    <List.Header>Popularity</List.Header><br/>
                    The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.
                    The popularity of a track is a value between 0 and 100, with 100 being the most popular.
                    The popularity is calculated by algorithm and is based, in the most part, on the total number of
                    plays the track has had and how recent those plays are. Generally speaking, songs that are being
                    played a lot now will have a higher popularity than songs that were played a lot in the past.
                    Duplicate tracks (e.g. the same track from a single and an album) are rated independently.
                    Artist and album popularity is derived mathematically from track popularity. Note that the popularity
                    value may lag actual popularity by a few days: the value is not updated in real time.
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Acousticness</List.Header>
                    A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence
                    the track is acoustic. The distribution of values for this feature look like this:
                  </List.Content>
                  <a href='https://developer.spotify.com/assets/audio/acousticness.png' target='_blank' rel='noopener noreferrer'>
                    <Image wrapped size='medium' src='https://developer.spotify.com/assets/audio/acousticness.png' />
                  </a>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Valence</List.Header>
                    A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track.
                    Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with
                    low valence sound more negative (e.g. sad, depressed, angry). The distribution of values for this
                    feature look like this:
                  </List.Content>
                  <a href='https://developer.spotify.com/assets/audio/valence.png' target='_blank' rel='noopener noreferrer'>
                    <Image wrapped size='medium' src='https://developer.spotify.com/assets/audio/valence.png' />
                  </a>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Energy</List.Header>
                    Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity.
                    Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy,
                    while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute
                    include dynamic range, perceived loudness, timbre, onset rate, and general entropy. The distribution
                    of values for this feature look like this:
                  </List.Content>
                  <a href='https://developer.spotify.com/assets/audio/energy.png' target='_blank' rel='noopener noreferrer'>
                    <Image wrapped size='medium' src='https://developer.spotify.com/assets/audio/energy.png' />
                  </a>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Danceability</List.Header>
                    Danceability describes how suitable a track is for dancing based on a combination of musical elements
                    including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least
                    danceable and 1.0 is most danceable. The distribution of values for this feature look like this:
                  </List.Content>
                  <a href='https://developer.spotify.com/assets/audio/danceability.png' target='_blank' rel='noopener noreferrer'>
                    <Image wrapped size='medium' src='https://developer.spotify.com/assets/audio/danceability.png' />
                  </a>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Speechiness</List.Header>
                    Speechiness detects the presence of spoken words in a track.
                    The more exclusively speech-like the recording (e.g. talk show, audio book, poetry),
                    the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made
                    entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music
                    and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most
                    likely represent music and other non-speech-like tracks. The distribution of values for this feature
                    look like this:
                  </List.Content>
                  <a href='https://developer.spotify.com/assets/audio/speachiness.png' target='_blank' rel='noopener noreferrer'>
                    <Image wrapped size='medium' src='https://developer.spotify.com/assets/audio/speechiness.png' />
                  </a>
                </List.Item>
              </List>
            </Modal.Content>
          </Modal>
        </div>
      </section>
    )
  }
}

export default Title;