import React from "react";
class ArchieveComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <h1>Arched components</h1>
            {
                this.props.prop1.map((item)=>(
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                       
                    </div>

                ))
            }
            </>
        )
    }
}

export default ArchieveComponent