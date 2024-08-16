import React from "react";
import axios from "axios"
class LcmAPICALL extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[]
        }
    }
    ComponentDidMount(){
       e.preventDefault()
       /*fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((res)=>this.setState({result:res})).catch((err)=>console.log(err))*/
       axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>this.setState({result:res.data})).catch((err)=>console.log(err))
        
    }
    render(){
        return(
            <>
            
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
export default LcmAPICALL