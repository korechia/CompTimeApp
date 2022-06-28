
import React from 'react';

function GetIntervalsHours(startdate,starttime,enddate,endtime){
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
  	}
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
  var landf=changetohours(timeforendday)+changetohours(timeforday1)
  //Account for 30 minute unpaid schedule
  if (landf>billhour && billhour<(Math.abs(workend.getTime()-workstart.getTime())/(1000*60*60*24))){
  	//floor whole thing to make a whole num
  	landf=Math.floor(landf-((landf/billhour)*.5))
  }
  console.log(
//daydiff+""+dayhours+"/// "+hoursforendday+" | "+hoursforday1+" ///"+
 changetohours(timeforendday)+"___"+changetohours(timeforday1)
  	)
  //add with all middle days
  var totaltime=dayhours+landf;

  console.log(totaltime);
  return Math.floor(totaltime);
}

function changetohours(value){
  return(value/(1000*60*60))
}
export default GetIntervalsHours;