import React from "react";
import axios from "axios";
class ContactManager extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            contacts:[],
            ipName:'',
            ipEmail:'',
            ipNumber:'',
            statusMsg:''
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3001/contactdetails").then((res)=>this.setState({contacts:res.data})).catch
        ((err)=>console.log("error"))
    }
    handleChange=(e,keyword)=>{
        if(keyword==="contactname"){
            this.setState({ipName:e.target.value})
        }
        else if(keyword==="contactemail"){
            this.setState({ipEmail:e.target.value})
        }
        else{
            this.setState({ipNumber:e.target.value})
        }

    }
    // handleChange = (e, keyword) => {
    //     this.setState({ [`ip${keyword.charAt(0).toUpperCase() + keyword.slice(1)}`]: e.target.value });
    // }
    // handleSubmit=(e)=>{
    //     e.preventDefault()
    //     axios.post("http://localhost:3001/contactdetails",{
    //         cname:this.state.ipName,
    //         cemail:this.state.ipEmail,
    //         cno:this.state.ipNumber
    //     }).then((res)=>this.setState({statusMsg:"create user successfully"})).catch((err)=>this.setState({statusMsg:"some error occurred please try again"}))
    //     axios.get("http://localhost:3001/contactdetails").then((res)=>this.setState({contacts:res.data})).catch
    //     ((err)=>console.log("error"))
    // }
    handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/contactdetails",{
            cname:this.state.ipName,
            cemail:this.state.ipEmail,
            cno:this.state.ipNumber
        }).then((res)=>{
            const temp=[...this.state.contacts,res.data]
            this.setState({contacts:temp})
            this.setState({statusMsg:"successfully added"})
        }).catch((err)=>this.setState({statusMsg:"some error occured"}))
    }
        // handleSubmit = (e) => {
        //     e.preventDefault();
        //     const { ipName, ipEmail, ipNumber, editingId } = this.state;
    
        //     if (editingId) {
        //         // If an editingId is set, we're updating an existing contact
        //         axios.patch(`http://localhost:3001/contactdetails/${editingId}`, {
        //             cname: ipName,
        //             cemail: ipEmail,
        //             cno: ipNumber
        //         })
        //         .then(() => {
        //             this.setState({ statusMsg: "Contact successfully updated" });
        //             this.fetchContacts();
        //             this.resetForm();
        //         })
        //         .catch((err) => this.setState({ statusMsg: "An error occurred. Please try again." }));
        //     } else {
        //         // Otherwise, create a new contact
        //         axios.post("http://localhost:3001/contactdetails", {
        //             cname: ipName,
        //             cemail: ipEmail,
        //             cno: ipNumber
        //         })
        //         .then((res) => {
        //             this.setState((prevState) => ({
        //                 contacts: [...prevState.contacts, res.data],
        //                 statusMsg: "Contact successfully added"
        //             }));
        //             this.resetForm();
        //         })
        //         .catch((err) => this.setState({ statusMsg: "An error occurred. Please try again." }));
        //     }
        // }
    handleUpdate=(e)=>{
        axios.patch("http://localhost:3001/contactdetails",{cname:"jhony"}).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    handleDelete=(e,keyid)=>{
        e.preventDefault(e)
        axios.delete(`http://localhost:3001/contactdetails/${keyid}`).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    render(){
        return(   
        <>
            <form>
                Contact Name:<input type="text" placeholder="enter the name of the contact" onChange={(e)=>this.handleChange(e,"contactname")}></input>
                Contact Mail:<input type="text" placeholder="Email"onChange={(e)=>this.handleChange(e,"contactemail")} ></input>
                Contact Number:<input type="text" placeholder="Phone" onChange={(e)=>this.handleChange(e,"contactnumber")}></input>
                <button onClick={(e)=>this.handleSubmit(e)}>create contact</button>
                <button onClick={(e)=>this.handleUpdate(e)}>update</button>
                <button onClick={(e)=>this.handleDelete(e)}>delete</button>

            </form>
            <p style={{color:"red"}}>{this.state.statusMsg}</p>
            {
                this.state.contacts.map((item)=>(
                    <>
                    <h2>Name :{item.cname}</h2>
                    <p>Phone :{item.cno}</p>
                    <p>Email :{item.cemail}</p>
                    <button onClick={(e)=>this.handleDelete(e,item.id)}>delete</button>
                    <button onClick={(e)=>this.handleUpdate(e,item.id)}>update</button>
                    <br></br>
                    <hr></hr>
                    </>
                ))
            }
        </>
        )
    }
}
export default ContactManager