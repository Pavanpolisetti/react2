import React from "react";

class SimpleAPICALL extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[]
        }
    }
    handleAPICall=(e)=>{
       e.preventDefault()
       fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((res)=>this.setState({result:res})).catch((err)=>console.log(err))
       
    }
    render(){
        return(
            <>
            <button onClick={(e)=>this.handleAPICall(e)}>call API</button>
            {
                this.state.result.map((item)=>(
                    <>
                    <h1>{item.name}</h1>
                    <h2>{item.username}</h2>
                    </>
                ))
            }
            </>
        )
    }
}
export default SimpleAPICALL