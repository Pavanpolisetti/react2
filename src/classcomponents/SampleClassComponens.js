import React from "react";
class SampleClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.fname="peter"
    }
    changeName=()=>{
      this.fname="tarun"
      console.log("inside func",this.fname)
      this.render()

    }
  render(){
    
    return(
        <>
         <h1>demo</h1>
         <h2>hello {this.fname}</h2>
         <button onClick={this.changeName}>change</button>
        </>
    )
  }
}
export default SampleClassComponent

