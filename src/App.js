import PropsEg from "./components/propsEg"
import SampleClassComponent from "./classcomponents/SampleClassComponens"
import SimpleState from "./components/SimpleState"
import RootComponent from "./components/RootComponent"
import LifeCycleMethods from "./components/LifeCycleMethods"
import TodoComponent from "./TodoApp/TodoComponents"
import MountingMethods from "./mounting"
import data from "./TodoApp/data"
import FormComponent from "./components/FormComponents"
import PureComponents from "./components/PureComponent"
import clothing from "./WOHOC/Clothing"
import productDetails from "./WOHOC/electronic"
import FilterClothingProducts from "./WOHOC/Filterclothingproducts"
import FilterElectronicProducts from "./WOHOC/Filterelectronicproducts"
import ClothingProducts from "./WHOC/ClothingProducts"
import ElectronicProducts from "./WHOC/ElectronicProducts"
import StylingState from "./components/stylingComponents"
import PlainComponent from "./WHOC/plainComponent"
import SimpleAPICALL from "./APICALLS/simpleApicall"
import LcmAPICALL from "./APICALLS/APIAxios"
import ImageSearchAPI from "./APICALLS/ImageSerchApl"
// import ContactManager from "./Contactmanager/contactManger"
import ContactManager from "./Contactmanager/contactDetais"
import ContactDetails from "./Contactmanager/contactDetais"
import ContactManger2 from "./Contactmanager/ContactManger2"
import FormElements from "./APICALLS/FormExamples/formElements"
import {BrowserRouter,Link,NavLink,Route,Routes} from 'react-router-dom'
import RegistrationForrm from "./assignmets/registratiponForm2"
import LeaderBoard from "./Scoreboard/LeaderBoard"
import SortAge from "./Scoreboard/SortAge"
import SortName from "./Scoreboard/SortName"
import SortPoints from "./Scoreboard/SortPoints"
import SortRank from "./Scoreboard/SortRank"
import LoginPageFunctional from "./RouterHooks/LoginPageFunctional"
import DashBoardHooks from "./RouterHooks/DashBoardHooks"



function App(){
    return(
        <>
          
           {/* <BrowserRouter>
            <Routes>
            <Route path='/' element={<LeaderBoard></LeaderBoard>}></Route>
            <Route path='/rank' element={<SortRank></SortRank>}></Route>
            <Route path='/age' element={<SortAge></SortAge>}></Route>
            <Route path='/points' element={<SortPoints></SortPoints>}></Route>
            <Route path='/name' element={<SortName></SortName>}></Route>
            </Routes>
           </BrowserRouter> */}
           <BrowserRouter>
           <NavLink to='/login'>
           {
            ({isActive})=>
            (
                <button className={isActive?'activeStatus':'inActiveStatus'}>login</button>
            )
           }
           </NavLink>
           <NavLink to='dashboard/:username/:role'>
           {
            ({isActive})=>
            (
                <button className={isActive?'activeStatus':'inActiveStatus'}>dashboard</button>
            )
           }
           </NavLink>
           <Routes>
            <Route path='/login' element={<LoginPageFunctional></LoginPageFunctional>}></Route>
            <Route path="/dashboard/:username/:role" element={<DashBoardHooks></DashBoardHooks>}></Route>
           </Routes>
           </BrowserRouter>
        
         
        </>

    )
}
export default App