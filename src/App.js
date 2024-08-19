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
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import RegestraionForm from "./assignmets/rejestrationForm"
import RegistrationForrm from "./assignmets/registratiponForm2"


function App(){
    return(
        <>
          
         
         {/* <BrowserRouter>
          <h1>homepage</h1>
          <Link to="/imagesearch">imageserch</Link>
         </BrowserRouter>
        
         <Routes>
          <Route path="/imagesearch"><FilterClothingProducts/></Route>
         </Routes> */}
         <RegistrationForrm/>
         
        </>

    )
}
export default App