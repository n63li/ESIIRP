import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { getID } from './Functions';
import './App.css';


class Welcome extends Component{
  constructor(){
    super();
    this.state={
      input: '',
      inputError: false,
      artistIDError: false
    }
  }

  test() {}

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.input === '' || this.state.input === undefined){
      this.setState({ inputError: true });
    } else {
      this.setState({ inputError: false });

      getID(this.state.input).then(response => {
        if (response){
          this.props.onSelectArtist(response)
        } else {
          this.setState({ artistIDError: true });
        }
      })
    }
  };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  };

  render(){
    return(
      <div className="welcome">
        <p>Welcome to my Spotify web app! As a Radiohead superfan, I originally built this to display which songs were
          the most popular per album. However, as I scaled the app, I opened it up to any artist of interest on Spotify.
          To use the app, simply type in the name of the artist, and we'll do the rest!</p>
        <Form
          size='small'
          inverted
          onSubmit={this.handleSubmit}
          error={this.state.artistIDError || this.state.inputError}>
          {this.state.artistIDError
            ?
            <Message negative size='large'>
              <Message.Header>Invalid Artist!</Message.Header>
              <p>Please enter an artist that exists</p>
            </Message>
            :
            null
          }
          <Form.Field>
            <Form.Input
              label='Choose an Artist'
              placeholder='ex: Radiohead'
              value={this.state.input}
              onChange={this.handleInputChange}
              error={this.state.inputError}
            />
          </Form.Field>
          <Form.Button type='submit' disabled={!this.state.input}>Enter</Form.Button>
        </Form>
      </div>
    )
  }
}

export default Welcome;