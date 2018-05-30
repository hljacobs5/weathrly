import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = (props) => {
 
  
  return (
    <div className='currentweather-card'>
      { props.currentWeather.current_observation &&
      <div>
        <link href="https://fonts.googleapis.com/css?family=Raleway+Dots" rel="stylesheet" />
        <h6>Current Weather</h6>
        <h3>CITY: {props.currentWeather.current_observation.display_location.full}</h3>
        <h3>CONDITION: {props.currentWeather.current_observation.weather}</h3>
        <h3>DATE: {props.currentWeather.current_observation.local_time_rfc822}</h3>
        <h3>TEMP: {props.currentWeather.current_observation.temperature_string}</h3>
      </div>
      }
    </div>
  );
};

export default CurrentWeather;

