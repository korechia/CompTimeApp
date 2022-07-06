 //$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%
import React, { Component} from 'react';  
import "./Comptime.css";
import { database, app} from '../firebase.js';
import { getDatabase, ref, child, get,update} from 'firebase/database';


class Table extends Component {
  constructor(props) {
    super(props);
    this.state ={Program:"History", ignore:false}
  }
  IgnoreVoid = ()=>{
    this.setState({ignore:!this.state.ignore})
  }

  Cancel(e){
    console.log("cancel");
    console.log(e);
  const location="Users/"+this.props.usernamestate.user+"/newhistory/"+e.target.id
  const updates={};
 updates[location+"/Void"] ="Y";
 updates[location+"/VoidUser"] =this.props.usernamestate.user;
 update(ref(database), updates).then(console.log("success"));
  console.log(updates);
 
  this.props.CalcHours();
  }
  render() {
       var haskey=(this.props.usernamestate.response!=undefined && !!Object.keys(this.props.usernamestate.response).length);
    if(haskey){
    return (<div>
 
  <caption>{this.props.usernamestate.name}: Add/Used Hours               
  {this.props.Program=="History" && <span className="tab"> <button onClick={this.IgnoreVoid}>{this.state.ignore ? ("show void"):("ignore void")}</button></span>}</caption>
 <thead>
  <th>Start Date Time</th>
  <th>End Date Time</th>
  <th>Num Hours</th>
  {(()=>{
    if(this.props.Program=="Request Hours"){ return(<th>Approved</th>)}
    if(this.props.Program=="History"){ return(<th>Void</th>)} 
  })()}
  <th>Cancel</th>
  </thead>
  <tbody>
  {Object.keys(this.props.usernamestate.response).map(item=>{
    var Hdata=this.props.usernamestate.response[item];
    var add=false;
    if (Hdata.enddate>this.props.GetCurrentDate() && Hdata.numhours<0 && this.props.Program=="Request Hours"){
 return(
  <tr><td>
{Hdata.startdate} {Hdata.starttime}</td><td>
{Hdata.enddate} {Hdata.endtime}</td><td>
{Hdata.numhours} </td><td>
{Hdata.Approved} </td><td>
<button id={item} onClick={(event)=>(this.Cancel(event))} > Cancel</button></td></tr>)
}
  if (Hdata.CreateDate==this.props.GetCurrentDate() && Hdata.numhours>0 && this.props.Program=="Add Hours"){
 return(
  <tr><td>
{Hdata.startdate} {Hdata.starttime}</td><td>
{Hdata.enddate} {Hdata.endtime}</td><td>
{Hdata.numhours} </td><td>
<button id={item}  onClick={(event)=>(this.Cancel(event))}> Cancel</button></td></tr>)
}
if(this.props.Program=="History" && (Hdata.Void=="N" || (Hdata.Void=="Y" && !this.state.ignore))){
    return(
  <tr><td>
{Hdata.startdate} {Hdata.starttime}</td><td>
{Hdata.enddate} {Hdata.endtime}</td><td>
{Hdata.numhours} </td><td>
{Hdata.Void} </td><td>
<button id={item} onClick={(event)=>(this.Cancel(event))}> Cancel</button></td></tr>)}}
)}
</tbody>
</div>
        )
      }
  }
}
export default Table;
 //END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!
