import React from "react";
class DashBoardComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {username,role}=this.props.userdata
        {console.log("child dashboard")}
        return(
        <>
        <h1>Welcome {username}</h1>
        <h2>Role:{role}</h2>
        <button onClick={this.props.toggleFunc}>logout</button>
        </>
        )
    }
}
export default DashBoardComponent