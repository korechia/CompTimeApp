
import React, { Component} from 'react';  
import "./Comptime.css";
import { database, app} from '../firebase.js';
import { getDatabase, ref, child, get} from 'firebase/database';
import DirectButtons from "./DirectButtons.js";
import Table from "./Table.js";


class History extends Component {
	constructor(props) {
    super(props);
    this.state ={Program:"History"}
  }

  hourcall = ()=>{
    this.props.CalcHours();
  }
/*CreateTableValue(){
	console.log("creation")
	var row ="<tbody><caption>"+this.props.usernamestate.name+": Add/Used"+"Hours History</caption>"+
	"<th>Start Date Time</th>"+
  "<th>End Date Time</th>"+
	"<th>Num Hours</th>"+
	"</th><th>Void</th></tr>";
  console.log("items")
  var row;
  console.log("resp")
  console.log(this.props.usernamestate.response)
Object.keys(this.props.usernamestate.response).forEach(item =>(row=this.IterateHistory(item,row)))
return  (<table dangerouslySetInnerHTML={{ __html: row }} />);
}

IterateHistory(item,row){
var Hdata=this.props.usernamestate.response[item];
  row=row+
'<tr><td>'+
Hdata.startdate+" "+Hdata.starttime+'</td><td>'+
Hdata.enddate+"  "+Hdata.endtime+'</td><td>'+
Hdata.numhours+'</td><td>'+
'<button item='+item+'>'+'void</button></td></tr>';
return row;
}*/

  render() {
    return (
    <div>
    <DirectButtons 
    usernamestate={this.props.usernamestate}
    fun={this.hourcall}
    changeUser={this.props.changeUser} />
     	   <div class="or"><h4> {this.props.usernamestate.name}:Comp Time History</h4>
     	   <h6 className="line"> Hours Left:{this.props.usernamestate.hours}</h6>
         </div>
         <div class="Request">
<div class="History">
 <Table usernamestate={this.props.usernamestate} 
 CalcHours={this.props.CalcHours}
 GetCurrentDate={this.props.GetCurrentDate} 
 Program={this.state.Program}/>
</div>
</div>

</div>
        )
  }
}
export default History;