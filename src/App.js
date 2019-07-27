import React, { Component } from 'react'
import Ninjas from "./components/Ninjas";

export default class App extends Component{
  state = {
    ninjas : [
      { name:"Ryu", age:"25", belt:"black", id:1 },
      { name:"Yoshi", age:"20", belt:"green", id:2 },
      { name:"Ken", age:"22", belt:"yellow", id:3 }
    ]
  }
render() {
  return (
    <div className="App">
      <h1>Welcome on my awesome Ninjas App!!!</h1>
      <Ninjas ninjas={this.state.ninjas} />
    </div>
  );
}
}

