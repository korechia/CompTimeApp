import React, { Component } from "react";
import Signon from "./Signon.js";
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
    //Pieces:$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%
         <Route path="/AddHours"
        element= {<AddHours 
          changeUser = {this.props.changeUser} 
          CalcHours={this.props.CalcHours}
          usernamestate={this.props.usernamestate}
        />} />
        <Route path="/RequestHours" 
        element= {<Hours 
         changeUser = {this.props.changeUser} 
          CalcHours={this.props.CalcHours}
          usernamestate={this.props.usernamestate}
        />} />
          <Route path="/History" 
          element={<History                 
          changeUser = {this.props.changeUser} 
          CalcHours={this.props.CalcHours}
          usernamestate={this.props.usernamestate}
           />} />
 <Route path="/" 
          element={<Signon                
          changeUser = {this.props.changeUser} 
          CalcHours={this.props.CalcHours}
          usernamestate={this.props.usernamestate}
           />} />
//END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!
        </Routes>
      </div>
  )}
}

export default MyRouter;
// You can think of these components as "pages"
// in your app.


