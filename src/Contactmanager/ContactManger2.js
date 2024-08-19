import React from "react";
import axios from "axios";
class ContactManger2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:[],
            cmail:"",
            cname:"",
            cnumb:""
        }

    }
    componentDidMount(){
        axios.get("http://localhost:3001/contactdetails").then((res)=>this.setState({value:res.data})).catch((err)=>console.log("error"))
    }
    handleChange(e,keyword){
        if(keyword==="ContactName"){
            this.setState({cname:e.target.value})
        }else if(keyword==="ContactNumber"){
            this.setState({cnumb:e.target.value})
        }else{
            this.setState({cmail:e.target.value})
        }

    }
    handleSubmit(e){
        e.preventDefault()
        axios.post("http://localhost:3001/contactdetails",{
            c.name:
        })
    }
    render(){
        return(
            <form>
                ContactName:<input type="text" placeholder="enter name"  onChange={(e)=>this.handleChange(e,"ContactName")} ></input>
                ContactNumber:<input type="number" placeholder="enter number" onChange={(e)=>this.handleChange(e,"ContactNumber")}></input>
                ContactMail:<input type="mail" placeholder="entermail" onChange={(e)=>this.handleChange(e,"contactMail")}></input>
                <button onClick={(e)=>this.handleSubmit(e)}>submit</button>
            </form>

        )
    }
}
export default ContactManger2