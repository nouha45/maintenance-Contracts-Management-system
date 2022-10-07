import React from 'react'
import {useEffect, useState} from 'react';
import "./widgetLg.css"
import {Link} from 'react-router-dom'
import EquipementService from '../../services/EquipementService'




export default function WidgetLg() {
  const [latestEquipements, setLatestEquipements]=useState([])
 
    const Button = ({type}) =>{
        return <button className={'widgetLgButton ' + type}> {type}</button>
      }

      useEffect(() => {

        getLatestEquipements();
    }, [])
    
    const getLatestEquipements = () => {
      EquipementService.getLatestEquipements().then((response) => {
        setLatestEquipements(response.data)
          console.log(response.data);
        
      }).catch(error =>{
          console.log(error);
      })
    }
    const deleteEquipement = async (num_serie) =>{
    

      EquipementService.deleteEquipement(num_serie).then((response) => {
        
    }).catch(error => {
        console.log(error)
    })
      
       
      }
    



  
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Les nouveaux équipements</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">L'équipement</th>
          <th className="widgetLgTh">Numéro de série</th>
          <th className="widgetLgTh">Désignation</th>
          <th className="widgetLgTh">Modéle</th>
          <th className="widgetLgTh">Marque</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Actions</th>
          
        </tr>

       
        {latestEquipements.map((row) => (
              <tr className="widgetLgTr">
          <td className="widgetLgPatient">
            <span className="widgetLgName">{row.nom} </span></td>

      <td className="widgetLgPatient">      <span className="widgetLgNum">{row.num_serie} </span></td>
      <td className="widgetLgPatient">      <span className="widgetLgDesignation">{row.designation} </span></td>
            <td className="widgetLgPatient"> <span className="widgetLgModele">{row.modele} </span></td>
            <td className="widgetLgPatient"> <span className="widgetLgMarque"> {row.marque}</span></td>
            <td className="widgetLgPatient"> <span className="widgetLgDate"> { row.date}</span></td>
          
          <td className="widgetLgPatient"> <Link to={"/equipementDetails/"+row.num_serie }>
              <button className="ButtonequipementList">See More</button></Link>
                                        
        <button   className = "ButtonequipementDelete" onClick = {() => {deleteEquipement(row.num_serie);
        window.location.reload();
          }}
          
        style = {{marginLeft:"10px"}}> Delete</button></td>
            </tr>  
        ))}
           
            
      </table>
    </div>)
  
}