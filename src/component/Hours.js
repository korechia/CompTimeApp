import React, { Component } from 'react';
import "./Comptime.css";
import Table from "./Table.js";
import { database, app} from '../firebase.js';
import { getDatabase, ref, push, set, child ,get} from "firebase/database";

class Hours extends Component {
constructor(props) {
    super(props);
    this.state ={
    stime:"",
    sdate:"",
    edate:'',
    etime:'',
    ohour:'',
    Program:"Request Hours"}
  }
AddHours= () =>{
		console.log("Add");
		console.log(this.props.usernamestate.user);
// Create a new post reference with an auto-generated id
const location="Users/"+this.props.usernamestate.user+"/newhistory"
const postListRef = ref(database, location);
const newPostRef = push(postListRef);
var hour=0;
hour =-this.state.ohour

 set(newPostRef,{
 	CreateDate:this.props.GetCurrentDate(),
    startdate:this.state.sdate,
    starttime:this.state.stime,
    Approved:"Y",
    Void:"N",
    VoidUser:"",
    enddate:this.state.edate,
    endtime:this.state.etime,
    numhours: hour
  }).then(()=>{
  	console.log("this has been successful");
 console.log(this.props.usernamestate.user);
	}
  );
  this.props.CalcHours();
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
<br/>
<button onClick={this.AddHours} type="submit" id="submit" >Add Request</button>
</div>
</div>
<div class="Request">
   <h2> Current Requested Hours off and Approval </h2>
   <div class="History">
 <Table usernamestate={this.props.usernamestate} 
 CalcHours={this.props.CalcHours}
 GetCurrentDate={this.props.GetCurrentDate} 
 Program={this.state.Program}/></div>
</div>
</div>

</div>
        )
  }
}
export default Hours;
