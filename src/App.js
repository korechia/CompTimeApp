import React, { Component } from 'react';
import Header from "./component/header.js";
import { database, app} from './firebase.js';
import { getDatabase, ref, child, get} from 'firebase/database';
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
    this.state={user:"korechia",
    name:"Kathleen",
             hours:0,
    }
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
  console.log("value in promise")
  console.log(snapshot)
  if (snapshot.exists()) {
    info = snapshot.val();
    this.setState({response:info.newhistory,
      all:info})
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
      usernamestate={this.state}
  />
      <div Class="body">
      <Myrouter
        usernamestate={this.state}
  />
      </div>
      </div>
      </Router>
    );
}
}
export default App;
