import React , { Component} from 'react';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state ={
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    console.log(this.props.deadLine);
  }

componentWillMount(){
  this.getTimeUntil(this.props.deadLine);
}

componentDidMount(){
  setInterval(() => this.getTimeUntil(this.props.deadLine), 1000 );
}

getTimeUntil(deadLine){
  const time = Date.parse(deadLine) - Date.parse(new Date());
  const seconds = Math.floor((time/1000)%60);
  const minutes = Math.floor((time/1000/60)%60);
  const hours = Math.floor(time/(1000*60*60)%24);
  const days = Math.floor(time/(1000*60*60*24));
  this.setState({days:days,hours:hours,minutes:minutes,seconds:seconds});
}


  render(){
    return(
      <div>
      <div className="ClockTime">{this.state.days} days</div>
      <div className="ClockTime">{this.state.hours} hours</div>
      <div className="ClockTime">{this.state.minutes} minutes</div>
      <div className="ClockTime">{this.state.seconds} seconds</div>
      </div>
    )
  }
}

export default Clock;
