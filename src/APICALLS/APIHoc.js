import React from "react"
const ApiHoc=(InputComponent)=>{
    return class StylingComponent extends React.Component{
        constructor(props)
        {
            super(props)
            this.state={
                number:"[]"
            }
           
        }

        render(){
            const globelStyle={color:"white",fontStyle:"italic",backgroundColor:"black"}
            return(
                <div style={globelStyle}>
                  <InputComponent{...this.props}></InputComponent>
                </div>
    
            )
        }
    }
   
}
export default ApiHoc