
import React, { Component} from 'react';  
import "./Comptime.css";
import Table from "./Table.js";
//$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%
import DirectButtons from "./DirectButtons.js";
//END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!

class History extends Component {
    constructor(props){
    super(props);
   this.state ={Program:"History"}     
  }

  render() {
    return (
        <div>
           {/*$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%*/}
         <DirectButtons 
    usernamestate={this.props.usernamestate}
    fun={this.props.CalcHours}
    changeUser={this.props.changeUser} />
      {/*END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!*/}
     	   <div class="or"><h4> {this.props.usernamestate.name}:Comp Time History</h4>
     	   <h6 className="line"> Hours Left:{this.props.usernamestate.hours}</h6>
         </div>
        <div class="Request">
<div class="History">
 <Table usernamestate={this.props.usernamestate} 
 CalcHours={this.props.CalcHours}
 GetCurrentDate={this.props.GetCurrentDate} 
 Program={this.state.Program}/>
</div>
</div>

</div>
        )
  }
}
export default History;
