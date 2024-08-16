import React from "react";
class MountingMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:"0"
            
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return{count:props.count}
    // }
    componentDidMount(){
        let counter = this.state.count
        setTimeout(()=>{
            counter = counter + 1
            this.setState({counter})
        },3000)
    }
   
   
    render(){
        return(
        <>
        <h1>{this.state.count}</h1>
        
       
        </>
        )
    }
}

export default MountingMethods
