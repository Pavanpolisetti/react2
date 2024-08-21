import { useNavigate,Link } from "react-router-dom"
import LoginPageClass from "./LoginpageClass"
function LoginPageFunctional(){
    let navigate=useNavigate()
   
    return(
        <>
     <LoginPageClass navigate={{navigate}}></LoginPageClass>
        </>
    )
}
export default LoginPageFunctional