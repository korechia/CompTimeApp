import React, { Component } from 'react';
import "./Comptime.css";

class AddHours extends Component {
	constructor(props) {
    super(props);
    this.state ={
    additionalHours:0,
    stime:"",
    sdate:"",
    edate:'',
    etime:''}
  }
  
	handleChange=({target})=> {
    this.setState({[target.name]: target.value});
  }


  render() {
    return (
    	<div>
       <h1 class="title"> {this.props.usernamestate.name}: Comp Hours Remaining: {this.props.usernamestate.hours}</h1>
       <div class="hours">
       <div class="Request">
       <h2> Add Hours Earned </h2>
       <div class="dropdown">
    <label>Start Day </label>
        <input type="date" name="sdate" value={this.state.sdate}
         onChange={this.handleChange}/>
         <label>                 Time</label>
        <input type="time" name="stime" rvalue={this.state.stime}
         onChange={this.handleChange}/>
   <br/>
<label>End Day </label>
        <input type="date" name="edate" value={this.state.edate}
         onChange={this.handleChange}/>
        <label>                  Time</label>
        <input type="time" name="etime" value={this.state.etime}
         onChange={this.handleChange}/>
         <br/>
<label>Hours Earned </label>
        <input type="number" name="additionalHours" value={this.state.additionalHours}
         onChange={this.handleChange}/>
</div>
</div>
</div>
</div>
        )
  }
}
export default AddHours;
