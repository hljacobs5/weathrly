import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = (props) => {
  console.log(props);
  return (
    <div className='currentweather-card'>
      <link href="https://fonts.googleapis.com/css?family=Raleway+Dots" rel="stylesheet" />
      <h6>Current Weather</h6>
      <h3>{props.currentWeather.display_location.city}</h3>
      <h3>{props.currentWeather.weather}</h3>
      <h3>{props.currentWeather.local_time_rfc822}</h3>
      <h3>{props.currentWeather.temperature_string}</h3>
      <h3>{props.currentWeather.wind_string}</h3>
    </div>
  );
};

export default CurrentWeather;