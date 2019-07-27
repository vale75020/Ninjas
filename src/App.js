import React, { Component } from 'react';
import Ninjas from "./components/Ninjas";
import AddNinja from './components/AddNinja';

export default class App extends Component{
  state = {
    ninjas : [
      { name:"Ryu", age:"25", belt:"black", id:1 },
      { name:"Yoshi", age:"20", belt:"green", id:2 },
      { name:"Ken", age:"22", belt:"yellow", id:3 }
    ]
  }

  addNinja = (ninja) => { // on pass la function comme props au composant AddNinja et elle prend en parametre ninja
    // console.log(ninja)
    ninja.id = Math.random()
    let newarrayninja = [...this.state.ninjas, ninja]  // une copie de l'array ninjas du state avec le nouveau ninja
    this.setState({
      ninjas : newarrayninja
    })
  }

  deleteNinja = (id) => {
    // console.log(id)
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id // condition true
    })
    this.setState({
      ninjas // ninjas: ninjas
    })
  }
render() {
  return (
    <div className="App">
      <h1>Welcome on my awesome Ninjas App!!!</h1>
      <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
      <AddNinja addNinja={this.addNinja} />
    </div>
  );
}
}

