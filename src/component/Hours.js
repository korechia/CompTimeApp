import React, { Component } from 'react';
import "./Comptime.css";
import { database, app} from '../firebase.js';
import DirectButtons from "./DirectButtons.js"
import { getDatabase, ref, push, set, child ,get} from "firebase/database";
import Table from "./Table.js";
import GetIntervalsHours from "./GetIntervalHours.js"

class Hours extends Component {
	constructor(props) {
    super(props);
    this.state ={
    stime:"",
    sdate:"",
    edate:'',
    etime:'',
    ohour:'',
    rhour:'',
    Program:"Request Hours"}
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
// Create a new post reference with an auto-generated id
const location="Users/"+this.props.usernamestate.user+"/newhistory"
const postListRef = ref(database, location);
const newPostRef = push(postListRef);
var hour=0;
if(this.state.ohour==""){
	if(this.state.rhour==""){
    alert("no hours were entered");
    	/*hour=-this.GetIntervalsHours(this.state.sdate,
    	this.state.stime,
    	this.state.edate,
    	this.state.etime)}else{
    		hour =-this.state.rhour*/
    	}
    }else{
    hour =-this.state.ohour}

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

 /* GetIntervalsHours(startdate,starttime,enddate,endtime){
  	alert("data");
  var workstarttime="09:00";
  var workendtime="17:00";
  var workdays=new Array(1,2,3,4,5);
  //start of workday
  var workstart=new Date(startdate+"T"+workstarttime);
  var billhour=8;
  //end of work day
  var workend= new Date(enddate+"T"+workendtime);
  //start date time enter
  var date1 = new Date(startdate+"T"+starttime);
  //end date time enter
  var date2 = new Date(enddate+"T"+endtime);
  var diff = date2.getTime()-date1.getTime();
  var daydiff=diff/(1000*60*60*24)
  //hours for each section
 // var hoursforendday=0;
  var timeforendday=0;
 // var hoursforday1=0;
   var timeforday1=0;
  var end;
  var start;
  //end of first day
  var fedate;
   //start of last day
  var lsdate;
   fedate = new Date(startdate+"T"+workendtime);
   lsdate=new Date(enddate+"T"+workstarttime);
    //end=workend.getHours();
    //start=workstart.getHours();
    end=fedate.getTime();
    start=lsdate.getTime();
  	console.log("A11"+date1.getDay())
  	console.log("A23 "+lsdate.getTime())
  	//get first days hours
  if(date1.getDate() == date2.getDate()){
  	var hoursforday1=Math.abs(Math.min(workend.getHours(),date2.getHours())-Math.max(workstart.getHours(),date1.getHours()));
 	var timeforday1=Math.abs(Math.min(workend.getTime(),date2.getTime())-Math.max(workstart.getTime(),date1.getTime()));
  }else if (workdays.includes(date1.getDay()) && 
  		date1.getTime()<fedate.getTime()){
  		//var hoursforday1=Math.abs(end-Math.max(workstart.getHours(),date1.getHours()));
  		var timeforday1=Math.abs(end-Math.max(workstart.getTime(),date1.getTime()));
  		console.log("H"+workend.getHours()+date1.getHours())
  	}
  	console.log("A22 "+date2.getDay())
  	console.log("A23 "+fedate.getTime())
  	console.log("E"+end+" "+Math.max(workstart.getHours(),date1.getHours()))
  	//get last days hous
  	if (workdays.includes(date2.getDay())&& 
  		date2.getTime()>lsdate.getTime()
  	 && date1.getDate() !== date2.getDate()){
  		// hoursforendday=Math.abs(Math.min(workend.getHours(),date2.getHours())-start);
  		 timeforendday=Math.abs(Math.min(workend.getTime(),date2.getTime())-start);
  		console.log("H2"+workstart.getHours()+" "+Math.min(workend.getHours(),date2.getHours()))
  	}
  	//Get all middle days hours
  	var day=1
  	date1.setDate(date1.getDate()+day)
  	var dayhours=0;
  	while (day<=daydiff-1){
  	if(workdays.includes(date1.getDay())){
  		dayhours=dayhours+billhour
  	}
  	date1.setDate(date1.getDate()+1)
  	day=day+1
  }
  //add up last and first hours
  var landf=this.changetohours(timeforendday)+this.changetohours(timeforday1)
  //Account for 30 minute unpaid schedule
  if (landf>billhour && billhour<(Math.abs(workend.getTime()-workstart.getTime())/(1000*60*60*24))){
  	//floor whole thing to make a whole num
  	landf=Math.floor(landf-((landf/billhour)*.5))
  }
  console.log(
//daydiff+""+dayhours+"/// "+hoursforendday+" | "+hoursforday1+" ///"+
 this.changetohours(timeforendday)+"___"+this.changetohours(timeforday1)
  	)
  //add with all middle days
  var totaltime=dayhours+landf;
  alert(totaltime);
  console.log(totaltime);
 this.setState({rhour:Math.floor(totaltime)});
  return Math.floor(totaltime);
}

changetohours(value){
  return(value/(1000*60*60))
}*/

/*CreateTableValue(){
	console.log("creation")
	var row ="<tbody><caption>"+this.props.usernamestate.name+":Unused Requested Hours History</caption>"+
	"<th>Start Date Time</th>"+
  "<th>End Date Time</th>"+
	"<th>Num Hours</th>"+
	"<th>Approved</th>"+
	"</th><th>Remove</th></tr>";
  console.log("items")
  var row;
Object.keys(this.props.usernamestate.response).forEach(item =>(row=this.IterateCurrent(item,row)))
return  (<table dangerouslySetInnerHTML={{ __html: row }} />);
}

IterateCurrent(item,row){
var Hdata=this.props.usernamestate.response[item];
if (Hdata.enddate>this.props.GetCurrentDate()){
  row=row+
'<tr><td>'+
Hdata.startdate+" "+Hdata.starttime+'</td><td>'+
Hdata.enddate+"  "+Hdata.endtime+'</td><td>'+
Hdata.numhours+'</td><td>'+
Hdata.Approved+'</td><td>'+
'<button item='+item+'>'+'Remove</button></td></tr>';
}
return row;
}*/

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
         {/*<button onClick={()=>{this.setState({rhour:GetIntervalsHours(this.state.sdate,this.state.stime,this.state.edate,this.state.etime)})}} >Calculate hours</button>

       		<label>   Number of hours  calculated:  </label>{this.state.rhour}
         <br/>*/}
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