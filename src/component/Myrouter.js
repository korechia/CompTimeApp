import React, { Component } from "react";
import History from "./History.js";
import Hours from "./Hours";
import AddHours from "./AddHours.js";
import "./Comptime.css";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

 


class MyRouter extends Component {

   render(){
  return (
      <div>

        <Routes>
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
        </Routes>
      </div>
  )}
}

export default MyRouter;
// You can think of these components as "pages"
// in your app.


