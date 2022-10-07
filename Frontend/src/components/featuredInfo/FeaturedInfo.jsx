import React, {useState, useEffect} from 'react'
import "./featuredInfo.css"
import {ArrowUpward, ArrowDownward} from '@material-ui/icons'
import PrestataireService from '../../services/PrestataireService'
import EquipementService from '../../services/EquipementService'
import ContractService  from '../../services/ContractService'




export default function () {

    const[prestataireCount, setPrestataireCount]=useState(0)
    const[equipementCount, setEquipementCount]=useState(0)
    const[contractCount, setContractCount]=useState(0)


    useEffect(() => {

        getPrestataireCount();
        getEquipementCount();
        getContractCount();
    }, [])
  
    const getPrestataireCount = () => {
        PrestataireService.getPrestataireCount().then((response) => {
            setPrestataireCount(response.data.count)
            console.log("count:" + response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const getEquipementCount = () => {
        EquipementService.getEquipementCount().then((response) => {
            setEquipementCount(response.data.count)
            console.log("count:" + response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const getContractCount = () => {
        ContractService.getContractCount().then((response) => {
            setContractCount(response.data.count)
            console.log("count:" + response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    
    
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Prestataires</span>

            
                    <div>
            <div className='featuredPatientsContainer'>
                <span className='featuredPatients'>{prestataireCount}</span>
                <span className="featuredPatientRate">
                    
                +11<ArrowUpward  className='featuredIcon '/>
                </span>
            </div>
            <span className='featuredSub'>Compared to  last month</span>
            </div>
            
           
        </div>

        <div className="featuredItem">
        <span className="featuredTitle">Equipements</span>
       
                    <div>
            
            <div className='featuredPatientsContainer'>
                <span className='featuredPatients'>{equipementCount}</span>
                <span className="featuredPatientRate">
                    
                +11<ArrowUpward  className='featuredIcon '/>
                </span>
            </div>
            <span className='featuredSub'>Compared to  last month</span>
            </div>
            
           
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Contrats de maintenance</span>
           
             
                    <div>
            
            <div className='featuredPatientsContainer'>
                <span className='featuredPatients'>{contractCount}</span>
                <span className="featuredPatientRate">
                    
                -13<ArrowDownward className='featuredIcon negative' />
                </span>
            </div>
            <span className='featuredSub'>Compared to  last month</span>
            </div>
           
        </div>
    </div>
  )
}