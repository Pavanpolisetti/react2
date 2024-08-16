import React from "react";
import DashBoard from "./childComponent/DashBord";
import SiginInComponent from "./childComponent/SigninComponent";
class RootComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
           isLogged:true,
           user:{
              username:"pavan",
              role:"admin"

           }
        }        
    }
    // login=()=>{
    //     this.setState({isLogged:true})
    // }
    // logout=()=>{
    //     this.setState({isLogged:false})
    // }
    toggleUser=()=>{
       this.setState({isLogged:!(this.state.isLogged)})
    }
    
    render(){
        return(
            <>
             {
                
                this.state.isLogged?  
                <>
                <DashBoard userdata={this.state.user} toggleFunc={this.toggleUser}/>
                </>:<>
                <SiginInComponent/>
                </>
             }
            
            </>
        )
    }
}
export default RootComponent