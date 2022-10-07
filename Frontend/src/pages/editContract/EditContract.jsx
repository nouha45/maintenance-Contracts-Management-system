
import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ContractService from '../../services/ContractService'
import '../updateEquipement/updateEquipement.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

function EditContract() {
     
    const[equipement_num_serie, setEquipement_num_serie]= useState('')
    const[prestataire, setPrestataire]=useState('')
    const[intervenant, setIntervenant]= useState('')
    const[date_intervention, setDate_intervention]= useState('')
    const[action, setAction]=useState('')
    const[commentaire, setCommentaire]=useState('')

    const history = useNavigate();
    const {marche}= useParams();

    const saveContract = (e) => {
        e.preventDefault();

        const contract = {marche, equipement_num_serie,date_intervention, prestataire, intervenant, action, commentaire}

        
            ContractService. updateContract( contract).then((response) => {
                history('/equipementDetails/'+equipement_num_serie)
            }).catch(error => {
                console.log(error)
            })

        }

        useEffect(() => {

            getContract();
        }, [])
        
        const getContract = () => {
          ContractService.getContractByMarche(marche).then((response) => {
            console.log("ana dkhlt getcontract")

            console.log(response)
            
             setEquipement_num_serie(response.data.equipement_num_serie)
             setPrestataire(response.data.prestataire)
             setIntervenant(response.data.intervenant)
             setDate_intervention(response.data.date_intervention)
             setAction(response.data.action)
             setCommentaire(response.data.commentaire)

             console.log(date_intervention)
            
          }).catch(error =>{
              console.log(error);
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
                    <span className="details">Serial number of the equipment</span>
                    <input
                    value={equipement_num_serie}
                    onChange = {(e) => setEquipement_num_serie(e.target.value)}
                     type="text" placeholder="Enter the name of the equipment" required/>
                </div>
                <div className="input-box">
                    <span className="details">Marche</span>
                    <input 
                    value={marche}
                    type="text" placeholder="Enter the seriel number" required/>
                </div>
                <div className="input-box">
                    <span className="details">Prestataire</span>
                    <input
                    value={prestataire}
                    onChange = {(e) => setPrestataire(e.target.value)}
                     type="text" placeholder="Enter the designation" required/>
                </div>
                <div className="input-box">
                    <span className="details">Intervenant</span>
                    <input 
                    value={intervenant}
                    onChange = {(e) => setIntervenant(e.target.value)}
                    type="text" placeholder="Enter the brand" required/>
                </div>
                <div className="input-box">
                    <span className="details">Action</span>
                    <input 
                    value={action}
                    onChange = {(e) => setAction(e.target.value)}
                    type="text" placeholder="Enter the model" required/>
                </div>
                
                <div className="input-box">
                    <span className="details">Date d'intervention</span>
                    <input 
                    value={date_intervention}
                    onChange = {(e) => setDate_intervention(e.target.value)}
                    type="text" placeholder="Enter the name of the equipment" required/>
                </div>
                <div className="input-box">
                    <span className="details">Commentaire</span>
                    <textarea
                    value={commentaire}
                    onChange = {(e) => setCommentaire(e.target.value)}
                     type="textarea" rows="5" cols="50" placeholder="Enter the details" required/>
                </div>
            </div>
            <div className="button-edit">
                <input type="submit"  onClick = {(e) => saveContract(e)} value="Edit"/>
            </div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default EditContract