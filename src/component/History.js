
import React, { Component} from 'react';  
import "./Comptime.css";
//$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%
import Table from "./Table.js";
//END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!


class History extends Component {
    constructor(props){
    super(props);
   this.state ={Program:"History"}     
  }

  render() {
    return (
    <div>
     	   <div class="or"><h4> {this.props.usernamestate.name}:Comp Time History</h4>
     	   <h6 className="line"> Hours Left:{this.props.usernamestate.hours}</h6>
         </div>
        <div class="Request">
<div class="History">
    {/*$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%*/}
 <Table usernamestate={this.props.usernamestate} 
 CalcHours={this.props.CalcHours}
 GetCurrentDate={this.props.GetCurrentDate} 
 Program={this.state.Program}/>
   {/*END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!*/}
</div>
</div>

</div>
        )
  }
}
export default History;
