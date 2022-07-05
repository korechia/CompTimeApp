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

   render(){
   var isLoggedIn = this.props.usernamestate.Authenticated;

   console.log(isLoggedIn)
  return (
      <div>
      {!isLoggedIn ? (
          <Routes>
           <Route path="/Parameters" 
        element= {<Signoff
          changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
            Authenticate={this.props.Authenticate}
        />} />
         <Route path="/AddHours" 
        element= {<Signoff 
       changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
        />} />
        <Route path="/RequestHours" 
        element= {<Signoff
          changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
        />} />
          <Route path="/History" 
          element={<Signoff
        changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
           />} />
            <Route path="/" 
          element={<Signon 
          changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
           />} />

    </Routes>
        ):(
        <Routes>
         <Route path="/AddHours" 
        element= {<AddHours
          changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
        />} />
        <Route path="/RequestHours" 
        element= {<Hours 
          changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
        />} />
          <Route path="/History" 
          element={<History
        changeUser = {this.props.changeUser} 
          usernamestate={this.props.usernamestate}
          CalcHours={this.props.CalcHours}
          GetCurrentDate={this.props.GetCurrentDate}
          Authenticate={this.props.Authenticate}
           />} />
            <Route path="/" 
          element={<Signon
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


