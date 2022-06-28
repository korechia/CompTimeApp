import React, { Component } from 'react';
import "./Comptime.css";


export default class DirectButtons extends Component{
	clickhandle(username,name){
	this.props.changeUser(username,name,this.props.fun);
}
 render(){
		return(
	<div class="DirectButtons">
	 {this.props.usernamestate.supervisorOf.map(item=>{
	 	return(
	 		//<button onClick={()=>(this.clickhandle("kwong","kenny"))}> Kenny </button>
	 		<button onClick={()=>(this.clickhandle(item[0],item[1]))}> item[1] </button>
	 		)
	})}
	 </div>
)
}
}