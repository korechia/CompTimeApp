//$%$%$ NEW CODE! $%$% NEW CODE! $%$%$%$% NEW CODE! $%$%$%
import React, { Component } from "react";
import "./Comptime.css";

export default class DirectButtons extends Component {
  clickhandle(username, name) {
    this.props.changeUser(username, name, this.props.fun);
  }
  render() {
    var issupervisor = !this.props.usernamestate.supervisorOf.length == 0;
    return (
      <div class="DirectButtons">
        {this.props.usernamestate.supervisorOf.map((item) => {
          console.log(item);
          return (
            //<button onClick={()=>(this.clickhandle("kwong","kenny"))}> Kenny </button>
            <button onClick={() => this.clickhandle(item[0], item[1])}>
              {" "}
              {item[1]}{" "}
            </button>
          );
        })}
        {issupervisor && (
          <button
            onClick={() =>
              this.clickhandle(
                this.props.usernamestate.superuser,
                this.props.usernamestate.supername
              )
            }
          >
            {this.props.usernamestate.supername}
          </button>
        )}
      </div>
    );
  }
}
//END NEW CODE! $%$%$% END NEW CODE! $%$%$%$% END NEW CODE!
