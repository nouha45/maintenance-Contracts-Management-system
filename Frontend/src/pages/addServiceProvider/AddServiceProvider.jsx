import React, {useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import PrestataireService from '../../services/PrestataireService'
import '../updateEquipement/updateEquipement.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
function AddServiceProvider() {
  
    const[nom, setNom]= useState('')
    
    const history = useNavigate();
    const {numSerie} = useParams();
    console.log(numSerie)
    let equipement_num_serie= numSerie

    const savePrestataire = (e) => {
        console.log('ana dkhlt l save')
        e.preventDefault();

        const prestataire = {nom}

        
        PrestataireService.addPrestataire(prestataire).then((response) => {
                console.log('ana nouhaila')
                history('/listPrestataire')
            }).catch(error => {
                console.log(error)
            })

        
        
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
                    <span className="details">Prestatare</span>
                    <input
                    value={nom}
                    onChange = {(e) => setNom(e.target.value)}
                     type="text" placeholder="Enter the market" required/>
                </div>
                
            </div>
            <div className="button-edit">
                <input type="submit"  onClick = {(e) => savePrestataire(e)} value="Add"/>
            </div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default AddServiceProvider