import React, { Component } from 'react';
import Header from "./component/header.js";
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
             hours:0,
    }
  }


  render() {
    return (
      <Router>
      <div>
      usernamestate={this.state}
      <div Class="body">
      <Myrouter
      changeUser = {this.changeUser} 
        usernamestate={this.state}
      </div>
      </div>
      </Router>
    );
}
}
export default App;
