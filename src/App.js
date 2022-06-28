import React, { Component } from 'react';
import Header from "./component/header.js";
import Myrouter from "./component/Myrouter.js";
import { database, app} from './firebase.js';
import { getDatabase, ref, child, get} from 'firebase/database';
import {getAuth} from "firebase/auth";
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
    superuser:"undefined",
    name:"undefined",
    all:undefined,
             hours:0,
             response:[],
             Authenticated:true,
            supervisorOf:[]}
  }
componentDidMount(){
  this.Authenticate()
}

 Authenticate=()=>{
  console.log("parentwillmount")
  getAuth().onAuthStateChanged((user) => {
      if (user) {
        console.log("true"+user)
        console.log(user)
        var email=user.email.substr(0, user.email.indexOf('@'));
      this.setState({Authenticated:true},this.changeUser(email,user.displayName,this.CalcHours,email))
      }else{
        console.log("false"+user)
        this.setState({Authenticated:false}, this.changeUser("undefined","undefined",this.CalcHours,"undefined"));
        }
})

}

  changeUser = (Uname,NameD,fun,superuser)=> {
    console.log(Uname);
    console.log(this.state.Authenticated)
    console.log("llllllllll")
    console.log("UUUUUUUUUUUUUUU1");
    var total=this.CalcHours();
if(superuser==null){
  superuser=this.state.superuser;
}
      this.setState({user:Uname,
    name:NameD,
    superuser:superuser},fun);
  console.log("hour");
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

 CalcHours=()=>{
    console.log("calculate");
     var promise= this.getData();
      console.log(promise);
      promise.then((snapshot)=>{
  if (snapshot.exists()) {
    var info = snapshot.val().newhistory;
    console.log("get")
    console.log(info);
    var total=0;
    var haskey=(info!=undefined && !!Object.keys(info).length);
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
var Hdata=info[item];
console.log("IIIITem")
console.log(Hdata)
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

promise.then((snapshot) => {
  if (snapshot.exists()) {
    info = snapshot.val();
    this.setState({response:info.newhistory,
      all:info})
    console.log("i"+info)
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.log(error);
});
return promise
}
  render() {
    return (
      <Router>
      <div>
      <Header
      changeUser = {this.changeUser} 
      usernamestate={this.state}
      Authenticate={this.Authenticate}/>
      <div Class="body">
      <Myrouter
      changeUser = {this.changeUser} 
        usernamestate={this.state}
        CalcHours={this.CalcHours}
        GetCurrentDate={this.GetCurrentDate}
        Authenticate={this.Authenticate}
        BooleanA={this.BooleanA}/>
      </div>
      </div>
      </Router>
    );
}
}
export default App;