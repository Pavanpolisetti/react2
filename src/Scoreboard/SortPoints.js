import React from "react";
import response from './data'
import './LeaderBoard.css'
import NavBarComponent from "./NavbarComponents";
class SortPoints extends React.Component{
    constructor(props)
{
    super(props)
    this.state={
        data:[]
    }
}
componentDidMount(){
const sortedData=[...response.list].sort((a,b)=>Number(a.points)-Number(b.points))
this.setState({data:sortedData})
}
render(){
    return(
<>
<NavBarComponent keyword={4}></NavBarComponent>
<h2>Sorted based on Score</h2>
<table>
<thead>
    <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Age</th>
        <th>Points</th>
    </tr>
</thead>
<tbody>
    {
        this.state.data.map((item)=>(
            <tr>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.points}</td>
            </tr>
        ))
    }
</tbody>
</table>
</>
    )
}
}
export default SortPoints