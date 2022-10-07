import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import FeaturedInfo from './components/featuredInfo/FeaturedInfo'
import WidgetLg from "./components/widgetLg/WidgetLg"
import EquipmentList from './pages/equipmentList/EquipmentList'
import EquipementDetails from './pages/equipementDetails/EquipementDetails'
import ReactDOM from "react-dom/client";
import AddEquipement from './pages/addEquipement/AddEquipement'
import UpdateEquipement from './pages/updateEquipement/UpdateEquipement'
import AddContract from './pages/addContract/AddContract'
import ContractsList from './pages/contractsList/ContractsList'
import EditContract from './pages/editContract/EditContract'
import ServiceProvidersList from './pages/serviceProviders/ServiceProvidersList'
import Login from './pages/LoginPage/Login'
import AboutUs from './pages/AboutUs/AboutUs'
import ForgotPage from './pages/ResetPassword/ForgotPage'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import AddServiceProvider from './pages/addServiceProvider/AddServiceProvider'
import "./app.css"
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {useEffect} from 'react'

function App() {

  
  
  return (
    
      
      <BrowserRouter>
      
     
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/equipmentList" element={<EquipmentList/>}/>
        <Route path='/equipementDetails/:numSerie' element={<EquipementDetails/>}/>
        <Route path="/addEquipement" element={<AddEquipement/>}/>
        <Route path="/updateEquipement/:numSerie" element={<UpdateEquipement/>}/>
        <Route path="/addContract/:numSerie" element={<AddContract/>}/>
        <Route path="/listContracts/:numSerie" element={<ContractsList/>}/>
        <Route path="/editContract/:marche" element={<EditContract/>}/>
        <Route path="/listPrestataire" element={<ServiceProvidersList/>}/>
        <Route path="/"  exact element={<Login/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/forgot" element={<ForgotPage/>}/>
        <Route path="/reset/:token" element={<ResetPassword/>}/>
        <Route path="/addServiceProvider" element={<AddServiceProvider/>}/>


      </Routes>
      </BrowserRouter>
     
   
  );
}

export default App;
