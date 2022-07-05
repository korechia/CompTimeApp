import React, { Component } from 'react';
import Header from "./component/header.js";
import { database, app} from './firebase.js';
import { getDatabase, ref, child, get} from 'firebase/database';
import {getAuth} from "firebase/auth";
import Myrouter from "./component/Myrouter.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export class App extends Component {
   constructor(props){
    super(props);
    this.state={user:"undefined",
      name:"undefined",
    all:undefined,
             hours:0,
                     response:[],
             Authenticated:true,
    }
  }
componentDidMount(){
  this.Authenticate()
  console.log(window.location.pathname)
  console.log(this.state.Authenticated)
}

 Authenticate=()=>{
  console.log("parentwillmount")
  getAuth().onAuthStateChanged((user) => {
      if (user) {
        console.log("true"+user)
        console.log(user)
        var email=user.email.substr(0, user.email.indexOf('@'));
      this.setState({Authenticated:true},this.changeUser(email,user.displayName,this.CalcHours,email))
        if( window.location.pathname == "/"){
        window.location.href = '/RequestHours'; 
        }
      }else{
        console.log("false"+user)
        this.setState({Authenticated:false}, this.changeUser("undefined","undefined",this.CalcHours,"undefined"));
        //alert("You are not Authenticated")
        }
})

}
    GetCurrentDate=()=>{
    var today = new Date();
    return this.formatDate(today);
  }

  formatDate(date){
  let d = new Date(date);
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  let year = d.getFullYear();
  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  return [year, month, day].join('-');
}

    changeUser = (Uname,NameD,fun)=> {
      this.setState({user:Uname,
    name:NameD},fun);
   //var total=this.CalcHours();
  console.log("hour");
  }
   CalcHours=()=>{
    console.log("calculate");
     var promise= this.getData();
      console.log(promise);
      promise.then((snapshot)=>{
  console.log("value in promise")
  console.log(snapshot)
  if (snapshot.exists()) {
     var data = snapshot.val();
    this.setState({response:data.newhistory,
      all:data})
    var info = snapshot.val().newhistory;
    var total=0;
    //Checks if the info object returned from the database has any key information
    var haskey=(info!=undefined && !!Object.keys(info).length);
    //if it has a key then iterate through the keys and add up total hours.
    if(haskey){
    Object.keys(info)
    .forEach(item =>(total=this.IterateHours(info,item,total)))
    this.setState({hours:total})}
    console.log('Final value:- ', total);
  } else {
    console.log("No data available");
  }
})
}

IterateHours(info,item,total){
 //object.key is the standard format to get data
 //however [] is used when placing a variable in the key location
var Hdata=info[item];
if(Hdata.Void=="N"){
 total= Hdata.numhours+total;
}
return total;
}
 getData=()=>{
    console.log("GGGGGUUUUUUUUUUUUUUU");
  var info = 0;
  console.log("====");
  console.log("Users/"+this.state.user+"/newhistory");
var promise=get(child(ref(database),"Users/"+this.state.user))
return promise;
}

  render() {
    return (
      <Router>
      <div>
      <Header
      changeUser = {this.changeUser} 
      usernamestate={this.state}
      Authenticate={this.Authenticate}
  />
      <div Class="body">
      <Myrouter
        usernamestate={this.state}
        changeUser = {this.changeUser} 
        CalcHours={this.CalcHours}
        GetCurrentDate={this.GetCurrentDate}
  />
      </div>
      </div>
      </Router>
    );
}
}
export default App;
