import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EquipementService from '../../services/EquipementService'
import './updateEquipement.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

function UpdateEquipement() {

    const[nom, setNom]= useState('')
    const[designation, setDesignation]= useState('')
    const[marque, setMarque]=useState('')
    const[madele, setMadele]= useState('')
    const[details, setDetails]= useState('')
    const[date, setDate]=useState('')

    const history = useNavigate();
    const {numSerie} = useParams();
    console.log(numSerie)

    const saveEquipement = (e) => {
        e.preventDefault();

        const equipement = {nom, designation,marque,madele,details,date}

        
            EquipementService. updatePatient(numSerie, equipement).then((response) => {
                history('/equipementDetails/'+numSerie)
            }).catch(error => {
                console.log(error)
            })

        
        
    }

    useEffect(() => {
   
        getEquipement();
    }, [])

    const getEquipement = () => {
        EquipementService.getEquipement(numSerie) .then((response => {

          setNom(response.data.nom)
          setDesignation(response.data.designation)
         setMarque(response.data.marque)
          setMadele(response.data.madele)
          setDate(response.data.date)
          setDetails(response.data.details)
         
          
    
          console.log(numSerie +"ana hna");
        })
        ).catch((e)=> console.log(e));
      }
      
    

  return (
    <div className="App">
    <Topbar/>
   <div className="container">
    
    
    <Sidebar/>
    <div className="container1">
        <div className="title1">Edit informations</div>
        <form  action="#">
            <div className="equipement-details">
                <div className="input-box">
                    <span className="details">L'equipement</span>
                    <input
                    value={nom}
                    onChange = {(e) => setNom(e.target.value)}
                     type="text" placeholder="Enter the name of the equipment" required/>
                </div>
                <div className="input-box">
                    <span className="details">Numero de serie</span>
                    <input 
                    value={numSerie}
                    type="text" placeholder="Enter the seriel number" required/>
                </div>
                <div className="input-box">
                    <span className="details">Designation</span>
                    <input
                    value={designation}
                    onChange = {(e) => setDesignation(e.target.value)}
                     type="text" placeholder="Enter the designation" required/>
                </div>
                <div className="input-box">
                    <span className="details">Marque</span>
                    <input 
                    value={marque}
                    onChange = {(e) => setMarque(e.target.value)}
                    type="text" placeholder="Enter the brand" required/>
                </div>
                <div className="input-box">
                    <span className="details">Modele</span>
                    <input 
                    value={madele}
                    onChange = {(e) => setMadele(e.target.value)}
                    type="text" placeholder="Enter the model" required/>
                </div>
                
                <div className="input-box">
                    <span className="details">Date</span>
                    <input 
                    value={date}
                    onChange = {(e) => setDate(e.target.value)}
                    type="text" placeholder="Enter the name of the equipment" required/>
                </div>
                <div className="input-box">
                    <span className="details">Details</span>
                    <textarea
                    value={details}
                    onChange = {(e) => setDetails(e.target.value)}
                     type="textarea" rows="5" cols="50" placeholder="Enter the details" required/>
                </div>
            </div>
            <div className="button-edit">
                <input type="submit"  onClick = {(e) => saveEquipement(e)} value="Edit"/>
            </div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default UpdateEquipement