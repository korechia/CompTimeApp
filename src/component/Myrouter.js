import React, { Component } from "react";
import History from "./History.js";
import Signoff from "./signoff.js";
import Signon from "./Signon.js";
import Hours from "./Hours";
import AddHours from "./AddHours.js";
import "./Comptime.css";
import Parameters from "./Parameters.js";
import { database, app} from '../firebase.js';
import { getDatabase, ref, child, get} from 'firebase/database';
import {getAuth} from "firebase/auth";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
 


class MyRouter extends Component {
/*  constructor(props){
    super(props);
    this.state ={user:"undefined",
    superuser:"undefined",
    name:"undefined",
    all:[],
             hours:0,
             response:[],
             Authenticated:this.GetValues("A")}
  }
   GetValues= async(value)=>{
       await getAuth().onAuthStateChanged((user,value) => {
      if (user) {
        if(value=="A")   return true;
      }else{
        if(value=="A") return false;
      }
    })
      
      
 }

componentWillMount(){
  getAuth().onAuthStateChanged((user) => {
      if (user) {
        var email=user.email.substr(0, user.email.indexOf('@'));
      this.changeUser(email,user.displayName,this.CalcHours,email);
      }
})
}

  changeUser = (Uname,NameD,fun,superuser)=> {
    var total=this.CalcHours();
if(superuser==null){
  superuser=this.state.superuser;
}
      this.setState({user:Uname,
    name:NameD,
    superuser:superuser},fun);
  console.log("hour");
  alert(NameD+Uname);
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
    Object.keys(info)
    .forEach(item =>(total=this.IterateHours(info,item,total)))
    this.setState({hours:total})
    console.log('Final value:- ', total);
  } else {
    console.log("No data available");
  }
})
}

IterateHours(info,item,total){
var Hdata=info[item];
 total= Hdata.numhours+total;
return total;
}

  getData=()=>{
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
}*/


   render(){
   var isLoggedIn = this.props.usernamestate.Authenticated;
   /*if (isLoggedIn==undefined){
    isLoggedIn=this.props.BooleanA();
   }*/
   console.log("log")

   console.log(isLoggedIn)
  return (
      <div>
      {!isLoggedIn ? (
          <Routes>
           <Route path="/Parameters" 
        element= {<Signoff
          id= "Board"
          changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
            Authenticate={this.props.Authenticate}
        />} />
         <Route path="/AddHours" 
        element= {<Signoff 
          id="Board"
       changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
        />} />
        <Route path="/RequestHours" 
        element= {<Signoff
          id="Board"
          changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
        />} />
          <Route path="/History" 
          element={<Signoff
            id="Board"
        changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
           />} />
            <Route path="/" 
          element={<Signon 
            id="Board"
          changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
           />} />

    </Routes>
        ):(
        <Routes>
           <Route path="/Parameters" 
        element= {<Parameters 
          id="Board"
          changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
            Authenticate={this.props.Authenticate}
        />} />
         <Route path="/AddHours" 
        element= {<AddHours 
          id="Board"
       changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
        />} />
        <Route path="/RequestHours" 
        element= {<Hours 
          id="Board"
          changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
        />} />
          <Route path="/History" 
          element={<History
            id="Board"
        changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
           />} />
            <Route path="/" 
          element={<Signon 
            id="Board"
          changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
           />} />
        </Routes>)}
      </div>
  )}
}

export default MyRouter;
// You can think of these components as "pages"
// in your app.


