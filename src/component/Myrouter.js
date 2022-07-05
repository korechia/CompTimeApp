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
          CalcHours={this.CalcHours}
          usernamestate={this.props.usernamestate}
        />} />
        <Route path="/RequestHours" 
        element= {<Hours 
          CalcHours={this.CalcHours}
          usernamestate={this.props.usernamestate}
        />} />
          <Route path="/History" 
          element={<History
          CalcHours={this.CalcHours}
          usernamestate={this.props.usernamestate}
           />} />
        </Routes>
      </div>
  )}
}

export default MyRouter;
// You can think of these components as "pages"
// in your app.


