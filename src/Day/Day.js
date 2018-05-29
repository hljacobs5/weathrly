import React from 'react';
import './Day.css';

const Day = (props) => {
  return (
    <div className='day-card'>
      <link href="https://fonts.googleapis.com/css?family=Raleway+Dots" rel="stylesheet" />   
      <h3>{props.day.date.weekday}</h3>
      <hr />
      <img src={props.day.icon_url} />
      <h3>High: {props.day.high.fahrenheit}</h3>
      <h3>Low: {props.day.low.fahrenheit}</h3>
    </div>
  )
}

export default Day;
