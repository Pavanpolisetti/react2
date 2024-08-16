function PropsEg(props){
    return(
        <>
            {console.log(props)}
            <h1>welcomeback {props.fname}</h1>
            <h3>Role:{props.Role}</h3>
            <h5>last login Time:12pm</h5>
        </>
    )
}
export default PropsEg;