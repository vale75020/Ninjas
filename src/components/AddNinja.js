import React, { Component } from 'react'

export default class AddNinja extends Component {
    state = { 
        name:"",
        age:"",
        belt:""
}

handleChange =(e) => {
    this.setState({
        [e.target.id]: e.target.value 
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.addNinja(this.state) // on recupere le state de ce composant et on l'utilise dans la function du parent
}
    render() {

        return (
            <div style={{display:"flex", flexWrap:"wrap",fontSize:"20px",width:"50%", padding:"10px", margin:"10px", color:"red",border:"1px solid black", minWidth:"350px"}}>
               <form onSubmit={this.handleSubmit}>
                   <label htmlFor="name">Name</label><br/>
                   <input type="text" id="name" placeholder="Enter Ninja Name" onChange={this.handleChange} />
                   <br/>
                   <br />
                   <label htmlFor="name">Age</label><br/>
                   <input type="text" id="age" placeholder="Enter Ninja Age" onChange={this.handleChange} />
                   <br/>
                   <br />
                   <label htmlFor="name">Belt</label><br/>
                   <input type="text" id="belt" placeholder="Enter Ninja Belt"onChange={this.handleChange} />
                   <br/>
                   <br />
                   <button>Submit to create a new Ninja</button>
                   </form> 
            </div>
        )
    }
}
