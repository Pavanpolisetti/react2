import React from "react";
import './styling.css'
class StylingState extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:"intial",
            time:"20"
        }        
    }
    changeData=()=>{
          console.log("change data")
          this.setState({data:"final",time:"30"})
    }
    render(){
        return(
            <>
             <h1 style={{color:"red"}}>states demo</h1>
             <h2 className="h2">{this.state.data}</h2>
             <h2>{this.state.time}</h2>
             <button onClick={this.changeData}>chage</button>
            </>
        )
    }
}
export default StylingState;