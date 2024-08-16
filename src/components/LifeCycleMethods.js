import React from "react";
class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            msg:"intail  "
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return{msg:props.msg}
    // }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({count:this.state.count+1})
        },3000)
    }
    shouldComponentUpdate(props,newState){
        if(this.state.count===newState.count){
            return false
        }else{
            return true
        }

    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("snapshot",prevstate)
        return "from snapshot"
    }
    componentDidUpdate(props,state){
        console.log("did update",state,snapValue )
    }
    changeCount=()=>{
        this.setState({count:this.state.count+1})
    }

    render(){
        return(
        <>
        <h1>{this.state.count}</h1>
        <h2>{this.state.msg}</h2>
        <button onClick={this.changeCount}>change</button>
        </>
        )
    }
}

export default LifeCycleMethods
