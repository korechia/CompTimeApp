import React, { Component } from 'react';
import "./Comptime.css";

class Hours extends Component {
constructor(props) {
    super(props);
    this.state ={
    stime:"",
    sdate:"",
    edate:'',
    etime:'',
    ohour:''}
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
       <h2> Request Hours off </h2>
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
         <label> Number of hours to be removed </label>
         <input type="number" name="ohour" value ={this.state.ohour}
          onChange={this.handleChange}/>
</div>
</div>
</div>

</div>
        )
  }
}
export default Hours;
