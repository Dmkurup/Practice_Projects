import React , { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
constructor(props){
super(props);
this.state = {
  deadLine: 'December 26,2018',
  newDeadLine: ''
}
}

changeDeadline(){
 this.setState({deadLine: this.state.newDeadLine});
}

  render (){
    return(
      <div className="App">
      <div className="AppTitle"> Count Down to {this.state.deadLine}</div>
      <Clock deadLine={this.state.deadLine}/>
      <div>
      <input
         placeholder="newDeadline"
         onChange={event => this.setState({newDeadLine: event.target.value})}
         />
      <button onClick={()=>this.changeDeadline()}>
      Submit
      </button>
      </div>
      </div>
    )
  }
}

export default App;
