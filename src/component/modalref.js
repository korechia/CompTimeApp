
import React, { Component} from 'react';
import "./Comptime.css";
import {
  Link
} from "react-router-dom";
import buttonpic from "./modalbutton.png";

class Modalref extends Component {
	  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
   componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
   componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
//Another way to write a function 'open=()=>{}' called an arrow function
openclose(){
	var modald=document.getElementsByClassName("modal")[0].style.display;
	if (modald=="block"){
		document.getElementsByClassName("modal")[0].style.display="none";
	}else{
		document.getElementsByClassName("modal")[0].style.display="block";
	}
	}

	handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      document.getElementsByClassName("modal")[0].style.display="none";
    };
  }
  render() {
    return (
    	<div ref={this.wrapperRef} className="order">
    <div class= "modalbutton">
        <button id="myBtn" onClick={this.openclose}><img src={buttonpic} /></button>
        </div>
	
<div id="myModal" class="modal">

  <div class="modal-content">
   <ul>
   <li><Link to="AddHours" 
	onClick={this.openclose}>Add Hours</Link>
          </li>
   <li><Link to="/RequestHours" 
        onClick={this.openclose}>Request Hours</Link>
          </li>
   <li><Link to="/History" 
       onClick={this.openclose}>History</Link>
          </li>
          </ul>
  </div>

</div>
</div>
        )
  }

}
export default Modalref;
