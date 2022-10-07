import React from 'react'
import "./sidebar.css"
import {LineStyle, InsertInvitation, People} from "@material-ui/icons"
import RouterIcon from '@mui/icons-material/Router';
import {Link} from "react-router-dom";
import { Logout} from '@mui/icons-material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';



export default function Sidbar() {


  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
        <Link to="/home"><li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon"/>
                  Home
              </li></Link>
                
                
            </ul>
        </div>

        <div className="sidebarMenu">
            <h3 className="sidebarTitle"> Quick Menu</h3>
            <ul className="sidebarList">
    <Link to="/listPrestataire" ><li className="sidebarListItem" >
            
                  <People className="sidebarIcon"/>
                  service provider management
                </li></Link>
                
             <Link to="/equipmentList">    <li className="sidebarListItem" >
                  <RouterIcon className="sidebarIcon"/>
                 equipments management
                </li></Link>
                
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Authentication</h3>
            <ul className="sidebarList">
     <Link to="/login">        <li className="sidebarListItem" >
            
                  <LockOpenIcon className="sidebarIcon"/>
                  Login
                </li></Link>
                
                 <li className="sidebarListItem" >

                  <AssignmentIndIcon className="sidebarIcon"/>
                Register
                </li>
                
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                
                
         <Link to="/" >      <li className="sidebarListItem">
                  <Logout className="sidebarIcon"/>
                  Logout
                  
                </li></Link>
                
            </ul>
        </div>
      </div>
      
    </div>
  )
}