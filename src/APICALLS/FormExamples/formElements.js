import React from "react";
class FormElements extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tech:"",

        }
    }
    render(){
        return(
            <>
              <form>
                <select>
                    <option value="">select</option>
                    <option value>react</option>
                    <option>angular</option>
                    <option>.net</option>
                </select>

              </form>
            </>
        )
    }
}
export default FormElements