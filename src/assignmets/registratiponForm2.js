import React, { Component } from "react";
import './RegistrationForm.css';  

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNum: "",
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("form data submitted", this.state);
    }

    render() {
        return (
            <div className="reg">
                <h1>Registration</h1>
                <p>Please Register</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Full Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Mobile Number:</label>
                        <input
                            type="tel"
                            name="phoneNum"
                            placeholder="Phone Number"
                            value={this.state.phoneNum}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;