import React, { Component } from "react";
import History from "./History.js";
 //$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%
import Signoff from "./signoff.js";
 //END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!
import Signon from "./Signon.js";
import Hours from "./Hours";
import AddHours from "./AddHours.js";
import "./Comptime.css";
import { database, app} from '../firebase.js';
import { getDatabase, ref, child, get} from 'firebase/database';
 //$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%
import {getAuth} from "firebase/auth";
 //END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!
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
 //$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%
   render(){
   var isLoggedIn = this.props.usernamestate.Authenticated;

   console.log(isLoggedIn)
  return (
      <div>
      {!isLoggedIn ? (
          <Routes>
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
{/*END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!*/}
        </Routes>)}
      </div>
  )}
}

export default MyRouter;
// You can think of these components as "pages"
// in your app.


