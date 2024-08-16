import React from "react";
class PureComponents extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={
            count:0,
        }
    }
    changeCount=()=>{
        this.setState({count:this.state.count+1})
    }

    render(){
        return(
        <>
        <h1>{this.state.count}</h1>
          <button onClick={this.changeCount}>change</button>
        </>
        )
    }
}
export default PureComponents