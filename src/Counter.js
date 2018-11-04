import React , {Component } from 'react';
import {connect} from 'react-redux';
import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';
import './App.css';

class Counter extends Component {

  constructor(props){
    super(props);
    this.state={
      counter:0
    }
  }

  render(){
    return(
      <div>
      <CounterDisplay
        counterVal={this.props.ctr}
       />
       <hr/>
      <CounterControls
         label="Increment"
         clicked= {this.props.onIncrement}
        />
      <CounterControls
         label="Decrement"
         clicked= {this.props.onDecrement}
        />

      <CounterControls
          label="Add 10"
          clicked= {this.props.onAdd}
        />
    <CounterControls
            label="Subtract 5"
             clicked= {this.props.onSubtract}
          />

    <hr/>
    <button onClick={this.props.onStoreResults}>Store</button>
    <ul>{this.props.storeResults.map(streResult =>{
      return(
      <li key={streResult.id} onClick= {()=> this.props.onDeleteResults(streResult.id)}>{streResult.val}</li>
    )
    })}
    </ul>
    </div>
    )
  }
}

const mapStateToProps= state =>{
  return {
    ctr: state.counter,
    storeResults: state.results
  }
};

const mapDispatchToProps = dispatch =>{
  return{
    onIncrement: ()=> dispatch({type:'INCREMENT'}),
    onDecrement: ()=> dispatch({type:'DECREMENT'}),
    onAdd: ()=> dispatch({type:'ADD',payload: 10}),
    onSubtract: ()=> dispatch({type:'SUBTRACT',payload:5}),
    onStoreResults: ()=> dispatch({type:'STORE_RESULTS'}),
    onDeleteResults:(id) => dispatch({type:'DELETE_RESULTS',payload:id})
  }
};



export default connect(mapStateToProps,mapDispatchToProps)(Counter);
