import React from "react"
const HocStyling=(InputComponent)=>{
    return class StylingComponent extends React.Component{
        constructor(props)
        {
            super(props)
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
export default HocStyling