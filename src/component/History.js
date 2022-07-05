
import React, { Component} from 'react';  
import "./Comptime.css";


class History extends Component {
    constructor(props){
    super(props);
  }

  render() {
    return (
    <div>
     	   <div class="or"><h4> {this.props.usernamestate.name}:Comp Time History</h4>
     	   <h6 className="line"> Hours Left:{this.props.usernamestate.hours}</h6>
         </div>


</div>
        )
  }
}
export default History;
