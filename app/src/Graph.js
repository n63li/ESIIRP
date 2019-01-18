import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './App.css';

class Graph extends Component{
  constructor(){
    super();
    this.state = {
      data: [],
      dataGenerated: false,
      opacity: {
        popularity: 1,
        acousticness: 1,
        danceability: 1,
        energy: 1,
        instrumentalness: 1,
        liveness: 1,
        loudness: 1,
        speechiness: 1,
        valence: 1
      }
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount(){
    let promises = [];
    let pointsArray = [];
    if (this.props.tracks[0]){
      this.props.tracks.forEach(track => {
        promises.push(
          pointsArray.push({
            "name": track.name,
            "popularity": track.popularity,
            "acousticness": track.acousticness,
            "danceability": track.danceability,
            "energy": track.energy,
            "instrumentalness": track.instrumentalness,
            "liveness": track.liveness,
            "loudness": track.loudness,
            "speechiness": track.speechiness,
            "valence": track.valence
          })
        );
      });
      Promise.all(promises).then(() => {
        this.setState(() => {
          return{
            data: pointsArray,
            dataGenerated: true
          }
        })
      })
    }
  }

  handleMouseEnter(o) {
    const { dataKey } = o;
    const { opacity } = this.state.opacity;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  }

  handleMouseLeave(o) {
    const { dataKey } = o;
    const { opacity } = this.state.opacity;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  }

  render(){
    return(
      <div className='graph'>
        <LineChart width={600} height={300} data={this.state.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey='name'/>
          <YAxis/>
          <CartesianGrid strokeDasharray='3 3'/>
          <Tooltip/>
          <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
          <Line type='monotone' dataKey='popularity' strokeOpacity={this.state.opacity.popularity} stroke="#82ca9d"/>
        </LineChart>
        <LineChart width={600} height={300} data={this.state.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey='name'/>
          <YAxis/>
          <CartesianGrid strokeDasharray='3 3'/>
          <Tooltip/>
          <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
          <Line type='monotone' dataKey='acousticness' strokeOpacity={this.state.opacity.acousticness} stroke="#8884d8"/>
          <Line type='monotone' dataKey='valence' strokeOpacity={this.state.opacity.valence} stroke="#82ca9d"/>
          <Line type='monotone' dataKey='energy' strokeOpacity={this.state.opacity.energy} stroke="#FFDAB9"/>
          <Line type='monotone' dataKey='danceability' strokeOpacity={this.state.opacity.danceability} stroke="#B22222"/>
          <Line type='monotone' dataKey='speechiness' strokeOpacity={this.state.opacity.speechiness} stroke="#FF1493"/>
        </LineChart>
      </div>
    )
  }
}

export default Graph;