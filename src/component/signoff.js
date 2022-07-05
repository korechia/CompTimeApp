 import React, { Component } from 'react';
import "./Comptime.css";
import vacation from "./vacation.jpeg";

class Signoff extends Component {

 render() {
    return (
      <div class="title">
    	<h1>You have been<br/> signed out!</h1>
      <img src={vacation}/>
     
</div>
        )
  }
}
export default Signoff;