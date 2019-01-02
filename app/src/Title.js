import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './App.css'

class Title extends Component{
  render(){
    return(
      <section className="app-title">
        <div className="app-title-content">
          <h1>Every Song in Its Right Place</h1>
          <p>Musical data from <Icon name='spotify'/></p>
          <a href='https://github.com/n63li/ESIIRP' target='_blank'>
            <Icon name='github' size='big'/>
          </a>
        </div>
      </section>
    )
  }
}

export default Title;