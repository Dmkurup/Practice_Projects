import React from 'react';
import './App.css';

const CounterDisplay = (props) =>{
  return(
    <div className="CounterDisplay">
    <div className="CounterDisplayText"> Counter Output: {props.counterVal}</div>
    </div>
  )
}
 export default CounterDisplay;
