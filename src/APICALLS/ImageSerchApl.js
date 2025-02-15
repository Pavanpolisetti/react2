import React from "react";
import axios from "axios";

class ImageSearchAPI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search:"",
            results:[]
        }
    }
    handleChange=(e)=>{
        this.setState({search:e.target.value})
    }
    handleSearch=(e)=>{
        e.preventDefault()
        axios.get(`https://api.unsplash.com/search/photos?query=${this.state.search}&client_id=-Rb7Nu8_j86on6ivByUuzfSo4dsriXdOxuLS3vVfBJE`).then((res)=>this.setState({results:res.data.results})).catch((err)=>console.log(err))
    }
   
    render(){
        return(
            <>
             <h1>search anything</h1>
             <form>
                <input type='text' placeholder="enter any keywrd" onChange={(e)=>this.handleChange(e)}></input>
                <button onClick={(e)=>this.handleSearch(e)}>search</button>
             </form>
             {
                this.state.results.map((item)=>(
                    <>
                    <img src={item.urls.small}></img></>
                ))
             }
            </>
        )
    }
}
export default ImageSearchAPI