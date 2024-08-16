import React from "react";
class PendingComponents extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return(
            <>
              <h1>pending tasks</h1>
             {
                 this.props.prop1.map((item)=>(
                    <div>
                        <h1>{item.title}</h1>
                        <h2>{item.desc}</h2>
                        <button onClick={()=>this.props.prop2(item.id)}>done</button>
                    </div>

                ))

             }

               
              
            </>
             
        )
    }
}

export default PendingComponents 