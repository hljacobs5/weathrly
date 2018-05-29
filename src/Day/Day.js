import React from 'react';
import './Day.css';

const Day = (props) => {
  return (
    <div className='day-card'>
      <link href="https://fonts.googleapis.com/css?family=Raleway+Dots" rel="stylesheet" />   
      <h4>Date: {props.day.date.pretty}</h4>
      <h6>Conditions: {props.day.conditions}</h6>
      <h6>High: {props.day.high.fahrenheit}</h6>
    </div>
  )
}

export default Day;
