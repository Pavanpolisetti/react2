import React from "react";
import PendingComponents from "./PendingComponemt";
import CompletedComponent from "./CompletedComponent";
import ArchieveComponent from "./AchiveComponents";
import HocStyling from "../WHOC/HocStyling";
class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todo:[],
            title:"",
            desc:""
        }

        
    }
    // static getDerivedStateFromProps(props,state){
    //     return{todo:props.data}
    // }
    handleUname=(e)=>{
        this.setState({Uname:e.target.value})
    }
     handlePwd=(e)=>{
         this.setState({pwd:e.target.value})
    }
    getCompletedItems=()=>{
       const CompletedItems= this.state.todo.filter((item)=>item.status===true&&item.active===true)
       return CompletedItems
       console.log(CompletedItems);
    }
    getPendingItems=()=>{
        const pendingItems= this.state.todo.filter((item)=>item.status===false)
        return pendingItems
    }
    getArchiveItems=()=>{
        const archivedItems= this.state.todo.filter((item)=>item.active===false)
        return archivedItems
    }
    changeCompletionStatus=(todoId)=>{
       const temp =this.state.todo 
       const obj=temp.find((item)=>item.id===todoId)
       obj.status=!obj.status
       this.setState({todo:temp})
       console.log("end")
    }
    changeActiveStatus=(todoId)=>{
        const temp =this.state.todo 
        const obj=temp.find((item)=>item.id===todoId)
        obj.status=!obj.active
        this.setState({todo:temp})
    }
    addToDo=()=>{
      const newItem={
        id: 5,
        title: this.state.title,
        desc:this.state.desc,
        status:false,
        active:true
      }
      const temp=[...this.state.todo,newItem]
      this.setState({todo:temp})
     
    }

    render(){
        return(
            <>
            <>
                <h1>Add Todo</h1>
                Title:<input type="text" onChange={(e)=>this.handleUname(e)}></input>
                desc:<input type="text" onChange={(e)=>this.handlePwd(e)}></input>
                <button onClick={()=>this.addToDo()}>addtodo</button>
            </>
             <PendingComponents prop1={this.getPendingItems()} prop2={this.changeCompletionStatus}/>
             <CompletedComponent prop1={this.getCompletedItems()} prop2={this.changeCompletionStatus} prop3={this.changeActiveStatus}/>
             <ArchieveComponent prop1={this.getArchiveItems()}/>
            </>
        )
    }
}
export default HocStyling(TodoComponent)