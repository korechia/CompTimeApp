
import React, { Component } from 'react';
import "./Comptime.css";
import { database, app} from '../firebase.js';
 //$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%
import { signInWithRedirect, getAuth,GoogleAuthProvider} from "firebase/auth";
import {getRedirectResult, signOut} from "firebase/auth";
import {onAuthStateChanged,EmailAuthProvider} from "firebase/auth";
 //END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!
import vacation from "./vacation.jpeg";

class Signon extends Component {
	constructor(props) {
    super(props);
  }
 //$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%
signin(){
const auth = getAuth();
console.log(auth);
const provider= new GoogleAuthProvider();
console.log(provider);
this.setState({signin:true},signInWithRedirect(auth, provider));
}

 //END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!
	
  render() {
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
