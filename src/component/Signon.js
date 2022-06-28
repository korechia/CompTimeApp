
import React, { Component } from 'react';
import "./Comptime.css";
import { database, app} from '../firebase.js';
import { signInWithRedirect, getAuth,GoogleAuthProvider} from "firebase/auth";
import "./Comptime.css";
import {getRedirectResult, signOut} from "firebase/auth";
import {onAuthStateChanged,EmailAuthProvider} from "firebase/auth";
import vacation from "./vacation.jpeg";
import googlebutton from "./GoogleButton.png"

class Signon extends Component {
	constructor(props) {
    super(props);
    this.state ={signin:false}
  }

signin(){
const auth = getAuth();
console.log(auth);
const provider= new GoogleAuthProvider();
console.log(provider);
this.setState({signin:true},signInWithRedirect(auth, provider));
}

async componentDidMount(){
	console.log("smount")
	console.log(this.props.usernamestate.Authenticated)
	if (this.state.signin){
	const auth = getAuth();
 await getRedirectResult(auth).then((result) => {
	console.log(result);
	var email=result.user.email.substr(0, result.user.email.indexOf('@'));
	this.props.changeUser(email,result.user.displayName,this.signcall,email);
    // This gives you a Google Access Token. You can use it to access Google APIs.
 this.setState({signin:false})
  }).catch((error) => {
  	console.log(error.message);
  	console.log(error.code);
  	alert("e:"+error)
   
    // ...
  });}else{
  	console.log(getAuth());
  }
	}

signcall=()=>{
	this.setState({signin:false},this.props.CalcHours());
}


signout(){
const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  alert("out successful");
  this.props.changeUser("undefined","undefined",this.signcall);
}).catch((error) => {
  // An error happened.
  //alert(error)
});
}
//<button onClick={()=>(this.signout())}>signout of app </button>

  render() {
  		if(this.props.usernamestate.Authenticated){
  			console.log("renderA")
		console.log(this.props.usernamestate.Authenticated)
		window.location.href = '/RequestHours';
	}
    return (
    	<div class="title">
    	<h3>Welcome to Tony's Group <br/> Compensation Time Utility</h3>
    	<button onClick={()=>(this.signin())}>sign in with google</button>
    	<br/>
    	<br/><img  class="vac" src={vacation} /><br/><br/>
     
</div>
        )
  }
}
export default Signon;