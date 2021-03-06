import React, { Component } from 'react';
import "./Comptime.css";
import { database, app} from '../firebase.js';
import DirectButtons from "./DirectButtons.js"
import { getDatabase, ref, push, set, child ,get} from "firebase/database";
import Table from "./Table.js";

class AddHours extends Component {
	constructor(props) {
    super(props);
    this.state ={
    additionalHours:0,
    stime:"",
    sdate:"",
    edate:'',
    etime:'',
    Program:"Add Hours"}
  }

  hourcall = ()=>{
    this.props.CalcHours();
  }
  


  //write comonent data
	AddHours= () =>{
		console.log("Add");
		console.log(this.props.usernamestate.user);
		console.log(this.state.sdate);
		console.log(this.state.stime);
		console.log(this.state.edate);
		console.log(this.state.etime);
    console.log(this.state.additionalHours);
// Create a new post reference with an auto-generated id
const location="Users/"+this.props.usernamestate.user+"/newhistory"
const postListRef = ref(database, location);
const newPostRef = push(postListRef);
 set(newPostRef,{
    CreateDate:this.props.GetCurrentDate(),
    startdate:this.state.sdate,
    starttime:this.state.stime,
    Approved:"Y",
    Void:"N",
    VoidUser:"",
    enddate:this.state.edate,
    endtime:this.state.etime,
    numhours:parseInt(this.state.additionalHours)
  }).then(()=>{
  	console.log("this has been successful");
 console.log(this.props.usernamestate.user);
		console.log(this.state.sdate);
		console.log(this.state.stime);
		console.log(this.state.edate);
		console.log(this.state.etime);
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
    	    <DirectButtons 
    usernamestate={this.props.usernamestate}
    fun={this.hourcall}
    changeUser={this.props.changeUser} />
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
<br/>
<button onClick={this.AddHours} type="submit" id="submit" >Add Hours</button>
</div>
<div class="Request">
   <h2> Hours Added today </h2>
    <div class="History">
     <Table usernamestate={this.props.usernamestate} 
 CalcHours={this.props.CalcHours}
 GetCurrentDate={this.props.GetCurrentDate} 
 Program={this.state.Program}/>
 </div>
</div>
</div>

</div>
        )
  }
}
export default AddHours;