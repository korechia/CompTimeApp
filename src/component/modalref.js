
import React, { Component} from 'react';
import { database, app} from '../firebase.js';
import {getAuth, signOut} from "firebase/auth";
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
	
//$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%	
	 signout=async()=>{
const auth = getAuth();
await signOut(auth).then(() => {
  // Sign-out successful.
   this.props.Authenticate();
}).catch((error) => {
  // An error happened.
  //alert(error)
});
this.open()

}
//END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!



	open(){
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
        <button id="myBtn" onClick={this.open}><img src={buttonpic} /></button>
        </div>
	
<div id="myModal" class="modal">

  <div class="modal-content">
	{/*$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%*/}
   {this.props.usernamestate.Authenticated ?(
   <ul>
   <li><Link to="AddHours" onClick={this.open}>Add Hours</Link>
          </li>
   <li><Link to="/RequestHours"
        onClick={this.open}>Request Hours</Link>
          </li>
          <li><Link to="/History"
    		onClick={this.open}>History</Link>
          </li>
          <li><Link to="/" 
    		onClick={this.signout}>Log Out</Link>
          </li>
          </ul>
          ):(
          <ul>
          <li>
            <Link to="/" 
		onClick={this.open}>Home</Link>
          </li>
        </ul>
        )}
	{/*END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!*/}
  </div>

</div>
</div>
        )
  }

}
export default Modalref;
