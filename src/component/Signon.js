
import React, { Component } from 'react';
import "./Comptime.css";
import vacation from "./vacation.jpeg";

class Signon extends Component {
	constructor(props) {
    super(props);
    this.state ={signin:false}
  }


  render() {
    return (
    	<div class="title">
    	<h3>Welcome to Tony's Group <br/> Compensation Time Utility</h3>
    	<br/>
    	<br/><img  class="vac" src={vacation} /><br/><br/>
     
</div>
        )
  }
}
export default Signon;
