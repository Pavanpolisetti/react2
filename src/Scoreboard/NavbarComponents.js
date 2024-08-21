import React from "react";
import { Link } from "react-router-dom";
import './NavBarComponent.css'
class NavBarComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            rank:false,
            name:false
        }
    }
    componentDidMount(){
        console.log(this.props.keyword)
        if(this.props.keyword===1){
            this.setState({rank:true})
        }
        if(this.props.keyword===2){
            this.setState({name:true})
        }
    }
    render(){
        return(
             <>
                <Link to='/'></Link>
                <Link to='/rank'>
                <button className={this.state.rank?'activeStatus':'inactiveStatus'}>Rank</button></Link>
                <Link to='/name'>
                <button className={this.state.name?'activeStatus':'inactiveStatus'}>Name</button></Link>
                <Link to='/age'>
                <button>Age</button></Link>
                <Link to='/points'>
                <button>Score</button></Link> 
             </>
        )
    }
      
 
}
export default NavBarComponent