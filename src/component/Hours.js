import React, { Component } from 'react';
import "./Comptime.css";

class Hours extends Component {
constructor(props) {
    super(props);
    this.state ={}
  }

  render() {
    return (
    	<div>
       <h1 class="title"> {this.props.usernamestate.name}: Comp Hours Remaining: {this.props.usernamestate.hours}</h1>
       <div class="hours">
       <div class="Request">
       <h2> Request Hours off </h2>
       <div class="dropdown">
  
</div>
</div>
</div>

</div>
        )
  }
}
export default Hours;
