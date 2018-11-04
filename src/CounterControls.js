import React from 'react';

const CounterControls =(props)=>  {
    return(
      <button className="CounterControls" onClick ={props.clicked}>
           {props.label}
      </button>
    )
}

export default CounterControls;
