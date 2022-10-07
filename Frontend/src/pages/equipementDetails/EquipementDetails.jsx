import React from 'react'
import {useEffect, useState} from 'react'
import { useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios"
import EquipementService from '../../services/EquipementService'
import routeur from '../../assets/routeur.png'
import './equipementDetails.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

function EquipementDetails() {
     
    const [nom, setNom]= useState('')
    const[designation, setDesignation]= useState('')
    const[marque, setMarque]= useState('')
    const[modele, setModele]=useState('')
    const[details, setDetails]= useState('')
    const[date, setDate]= useState('')

    const history = useNavigate()
    const {numSerie} = useParams();
    console.log(numSerie)

    const [equipement, setEquipement]= useState([])

    useEffect(() => {
   
        getEquipement();
    }, [])

    const getEquipement = () => {
        EquipementService.getEquipement(numSerie) .then((response => {

          setNom(response.data.nom)
          setDesignation(response.data.designation)
         setMarque(response.data.marque)
          setModele(response.data.madele)
          setDate(response.data.date)
          setDetails(response.data.details)
         
          
    
          console.log(numSerie +"ana hna");
        })
        ).catch((e)=> console.log(e));
      }
      
    



    

   const equipements = [
        {
            src:"../../assets/routeur.png",
            nom:"routeur",
            numSerie:"1245767486",
            designation:"TP-Link Routeur TL-WR841N",
            marque:"TP-LINK",
            modele:"TL-WR841N",
            details:"Routeur Wi-Fi	Norme(s) réseau	10/100 Mbps	Wi-Fi B (IEEE 802.11b)	Wi-Fi G (IEEE 802.11g)	Wi-Fi N 300 Mbps (IEEE 802.11n)"
        }
    ]

  return (
    <div className="App">
    <Topbar/>
   <div className="container">
    
    
    <Sidebar/>
  
      <div className="equipementD">
        
            <div className="big-img">
                <img src={routeur} alt="" width="400" height="400"/>
            </div>
            <div className="box">
                <div class="row">
                    <h2>{nom}</h2>
                    <h3>Informations generales</h3>
                    <span>
            <div className="g-info">   <p>Numero de serie:</p> {numSerie}<br/></div>
             <div className="g-info">   <p>Designation:</p> {designation}<br/></div>
            <div className="g-info">   <p>Marque:</p> {marque} <br/></div> 
            <div className="g-info">    <p>Modele: </p> {modele} <br/></div>
            <div className="g-info">    <p>Date: </p> {date} <br/></div></span>
                    <h3>Informations techniques</h3>
                    <p className="techniques">	{details}</p>
         <Link to={"/updateEquipement/"+numSerie }> <button className="buttons btn-hover color-1">Edit Informations</button></Link>
         <Link to={"/listContracts/"+numSerie }>             <button className="buttons btn-hover color-2">Get the contract</button></Link>
                </div>
            </div>
        </div>
        </div>
        </div>
      
    
  )
}

export default EquipementDetails
