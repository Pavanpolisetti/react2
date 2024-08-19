import React, { Component } from "react";

class RegestraionForm extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            phoneNum:"",
        }
    }
    handleChange=(e)=>{
        const{name,value}=e.target;
        this.state({[name]:value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();

    }
    render(){
        return(
            <div className="reg">
                <h1>Registartion</h1>
                <p>Please Register</p>
                <form on submit={this.handleSubmit}>
                    <div>
                        <label>Full Name:</label>
                        <input type="text" name="firstname" placeholder="FirstName" value={this.state.firstName} onChange={this.handleChange} required/>
                        <input type="text" name="Lastname" placeholder="LastName" value={this.state.lastName} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label>Email<span>:</span></label>
                        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label>MobileNumber:</label>
                        <input type="number" name="phnNumer" placeholder="PhoneNumber" value={this.state.phoneNum} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
}
export default RegestraionForm