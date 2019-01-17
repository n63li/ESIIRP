import React, { Component } from 'react';
// import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './App.css';

class Graph extends Component{
  constructor(){
    super();
    this.state={
      data: [],
      dataGenerated: false,
      // opacity: {
      //   popularity: 1
      // }
    }
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
            "speachiness": track.speechiness,
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

  // handleMouseEnter(o) {
  //   const { dataKey } = o;
  //   const { opacity } = this.state.opacity;
  //
  //   this.setState({
  //     opacity: { ...opacity, [dataKey]: 0.5 },
  //   });
  // }
  //
  // handleMouseLeave(o) {
  //   const { dataKey } = o;
  //   const { opacity } = this.state.opacity;
  //
  //   this.setState({
  //     opacity: { ...opacity, [dataKey]: 1 },
  //   });
  // }

  render(){
    if (this.state.dataGenerated){
      // console.log(this.state.dataGenerated && this.state.opacity.popularity)
    }
    return(
      <div className='graph'>
        <LineChart width={600} height={300} data={this.state.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey='name'/>
          <YAxis/>
          <CartesianGrid strokeDasharray='3 3'/>
          <Tooltip/>
          <Legend/>
          <Line type='monotone' dataKey='popularity' stroke="#82ca9d"/>
        </LineChart>
        <LineChart width={600} height={300} data={this.state.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey='name'/>
          <YAxis/>
          <CartesianGrid strokeDasharray='3 3'/>
          <Tooltip/>
          <Legend/>
          <Line type='monotone' dataKey='acousticness' stroke="#8884d8"/>
          <Line type='monotone' dataKey='valence' stroke="#82ca9d"/>
          <Line type='monotone' dataKey='energy' stroke="#FFDAB9"/>
          <Line type='monotone' dataKey='danceability' stroke="#B22222"/>
          <Line type='monotone' dataKey='speachiness' stroke="#FF1493"/>
        </LineChart>
      </div>
    )
  }
}

export default Graph;