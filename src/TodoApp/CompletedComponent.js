import React from "react";
class CompletedComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <h1>completed Tasks</h1>
            {
                this.props.prop1.map((item)=>(
                    <div>
                        <h1>{item.title}</h1>
                        <h2>{item.desc}</h2>
                        <button onClick={()=>this.props.prop2(item.id)}>undone</button>
                        <button onClick={()=>this.props.prop3(item.id)}>delete</button>
                    </div>

                ))
            }
            </>
        )
    }
}

export default CompletedComponent 