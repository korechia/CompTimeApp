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
         <Route path="/AddHours" 
        element= {<AddHours 
 //$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%
          changeUser = {this.props.changeUser} 
          CalcHours={this.props.CalcHours}
 //END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!
          usernamestate={this.props.usernamestate}
        />} />
        <Route path="/RequestHours" 
        element= {<Hours 
//$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%
         changeUser = {this.props.changeUser} 
          CalcHours={this.props.CalcHours}
 //END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!
          usernamestate={this.props.usernamestate}
        />} />
          <Route path="/History" 
          element={<History
 //$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%                   
          changeUser = {this.props.changeUser} 
          CalcHours={this.props.CalcHours}
 //END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!
          usernamestate={this.props.usernamestate}
           />} />
 <Route path="/" 
          element={<Signon
  //$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%                  
          changeUser = {this.props.changeUser} 
          CalcHours={this.props.CalcHours}
 //END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!
          usernamestate={this.props.usernamestate}
           />} />
        </Routes>
      </div>
  )}
}

export default MyRouter;
// You can think of these components as "pages"
// in your app.


