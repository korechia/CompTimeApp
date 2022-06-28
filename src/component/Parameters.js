import React, { Component } from 'react';
import "./Comptime.css";
import { database, app} from '../firebase.js';
import DirectButtons from "./DirectButtons.js"
import { getDatabase, ref, push, set, child ,get} from "firebase/database";

class Parameters extends Component {
	constructor(props) {
    super(props);
    this.state ={
    stime:"",
    etime:'',
    workDays:[],
    bill:"",
    Notdefault:true}
  }

AllDays(){
  return [0,1,2,3,4,5,6];
}

 GetDefualts(){
  if(this.state.Notdefault && this.props.usernamestate.all!==undefined){
var obj=this.props.usernamestate.all;
  if ("parameters" in obj){
    console.log(obj.parameters.workDays)
    var workDays = obj.parameters.workDays;
    console.log(workDays);
    var hours = obj.parameters.workHours;
    var billable = obj.parameters.billable;
   this.setState({workDays:workDays,
      stime:hours[0],
      etime:hours[1],
      bill:billable,
      Notdefault:false},() => { alert(this.state.workDays)});
    console.log("grab")
    console.log(this.state.workDays)
  } else {
   this.setState({workDays:[1,2,3,4,5],
      stime:"09:00",
      etime:"17:00",
      bill:8,
    Notdefault:false},() => { alert(this.state.workDays)});
  }
 }
}

Checkonchange=(e)=>{
  alert("selected");
  console.log("selected");
  console.log(this.state.etime);
  console.log(this.state.workDays);
 var num =parseInt(e.target.value);
 var newWorkA=this.state.workDays;
 var checked =e.target.checked;
  if (checked) { 
    this.setState({workDays:[...this.state.workDays,num]})
  }else{
    newWorkA.splice(this.state.workDays.indexOf(num),1);
  this.setState({workDays:newWorkA});
 }
}



/*CreateCheckmarks(){
  this.GetDefualts();
  var row="";
  this.AllDays().forEach(num =>(row=this.IterateDay(num,row)));
  var value=  (<span dangerouslySetInnerHTML={{ __html: row }} />)
  console.log("checkmark");
  console.log(value);
  return value;
}


IterateDay(num,row){
  row=row+'<label >'+this.GetDayName(num)+
 '<input type="checkbox"'+ this.GetDaysChecked(num)+
 " name='WeekDays'"+
 " id="+this.GetDayName(num)+
 " value='"+num+"'/>"+
  "<span class='checkmark'></span>"+
"</label>";
return row;
}*/
////
GetDaysChecked(daynum){
  if(this.state.workDays.includes(daynum)){
    return 'checked';
  }else{
  return "";
}
}
GetDayName(num){
  var day;
  switch (num) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
return day;
}

WriteParam=()=>{
  console.log(this.state.workDays);
  set(ref(database,"Users/"+this.props.usernamestate.user+"/parameters"), {
    workDays:this.state.workDays,
    workHours:[this.state.stime,this.state.etime],
    billable :this.state.bill
  })
}

handleChange=({target})=> {
    this.setState({[target.name]: target.value});
  }

  render() {
    return (
    	<div>
    	<DirectButtons fun={this.hourcall} changeUser = {this.props.changeUser} />
       <h1 class="title"> {this.props.usernamestate.name} Parameters</h1>
       <div class="hours">
       <div class="Request">
       <div class="dropdown">
    <h2>Work Days</h2>
    <span id="options">
{this.GetDefualts()}
{this.AllDays().map(num=>{ return( <label>{this.GetDayName(num)}
 <input type="checkbox" 
 checked={this.GetDaysChecked(num)}
 name='WeekDays'   
 id={this.GetDayName(num)}
 onClick={(event)=>(this.Checkonchange(event))}
  value={num}/>
  <span class='checkmark'></span>
</label>)})}


</span>
<br/>
   <br/>
   <h2>Work Hours</h2>
<label> Start Time</label>
        <input type="time" name="stime" value={this.state.stime}
         onChange={this.handleChange}/>
        <label> End Time</label>
        <input type="time" name="etime" value={this.state.etime}
         onChange={this.handleChange}/>
         <br/><br/>
         <label>Number of billable hours working</label>
        <input type="number" name="bill" value={this.state.bill}
         onChange={this.handleChange}/>
         <br/>
        </div>
<br/>
<button onClick={this.WriteParam} type="submit" id="submit" >Set Params</button>
</div>



</div>

</div>
        )
  }
}
export default Parameters;