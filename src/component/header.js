import React, { Component } from 'react';
import "./Comptime.css";
import logopic from "./meditech-logo.png";
import Modalref from "./modalref.js"

class Header extends Component {
  render() {
    return (
        <div className="header"><div className="logo"><img src={logopic} id="logo" /></div>
 <div className="wordH">Compensation Time Routine</div>
<Modalref usernamestate={this.props.usernamestate} 
changeUser = {this.props.changeUser}
Authenticate={this.props.Authenticate} />
<div id="demo"></div>
</div>
        )
  }
}
export default Header
