import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

class Welcome extends Component{
  render(){
    return(
      <Form inverted>
        <Form.Field>
          <label>User Input</label>
          <Form.Input label='Artist' placeholder='ex: Radiohead'>Test</Form.Input>
        </Form.Field>
        <Button type='submit'>Enter</Button>
      </Form>
    )
  }
}

export default Welcome;