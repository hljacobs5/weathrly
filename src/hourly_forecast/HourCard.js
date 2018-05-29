import React from 'react';
import './HourCard.css';

const Hour = (props) => {
  console.log(props)
  return (
    <div className='hour-card' >
      <h3>{props.hour.icon}</h3>
      <h3>{props.hour.title}</h3> 
      <h3>{props.hour.fcttext}</h3>
    </div>
  )
}

export default Hour;