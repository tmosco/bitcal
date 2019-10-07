import React, { Component } from "react";

//COMPONENTS

import "./home.css";
import AccountList from "../Account/Account_list";
import JSON from "../../file.json";


class Home extends Component {
  state = {
    data: JSON
  };

rf

  render() {
    
    return (
     <div>
     <AccountList accounts={this.state.data} />
         
     </div>
    );
  }
}

export default Home;
