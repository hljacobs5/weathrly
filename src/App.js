import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather.js';
import Forecast from './Forecast/Forecast.js';
import Hourly from './hourly_forecast/Hourly.js';
import Search from './Search/Search.js';
import { data } from './MockData.js';
import Key from './key.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentWeather: [],
      sevenHourForecast: undefined,
      tenDayForecast: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData () {
    let url = `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/CA/San_Diego.json`;
    fetch(url)
    .then(response=> response.json()) 
    .then(userInput => {
      this.setState(
      {
        currentWeather: userInput,
        sevenHourForecast: userInput,
        tenDayForecast: userInput
      })
    })
    .catch(error => console.log(error))

  } 



  render() {
    if(this.state.sevenHourForecast === undefined) {
      return(
        <div>loading, please wait..</div>
        )
    }
    return (
      <div>
        <h2 className='title'>Weathrly</h2>
        <CurrentWeather
          currentWeather={this.state.currentWeather} 
          />
        <h2>Seven Hour Forecast</h2>        
        <Hourly 
          sevenHourForecast={this.state.sevenHourForecast} 
          />
      </div>
       
    );
  }
}



export default App;
