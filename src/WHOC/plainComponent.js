import React from "react";
import HocStyling from "./HocStyling";
import PropTypes from "prop-types";
class PlainComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const{fname,tech}=this.props

        return(
            <>
              <h1>welcomback pavan</h1>
            </>
        )
    }
}
PlainComponent.propTypes={
    fname:PropTypes.string,
    tech:PropTypes.array
}
PlainComponent.defaultProps={
    fname:"jjkhdk"
}
export default HocStyling(PlainComponent)