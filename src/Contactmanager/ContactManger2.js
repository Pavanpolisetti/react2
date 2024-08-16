import React from "react";
import axios from "axios";
class ContactManger2 extends React.Component{
    constarcter(props){
        super(props)
        this.state={
            value:[],
            cid:"",
            cname:""
        }

    }
    render(){
        return(
            <form>
                contactName:<input type="text" placeholder="enter name"
            </form>

        )
    }
}