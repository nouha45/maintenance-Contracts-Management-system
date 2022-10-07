import axios from "axios";
import React from 'react'

const EQUIPEMENT_API_BASE_URL =`http://localhost:8080/api/v1/`



class EquipementService {
    getEquipements(){
        return axios.get(EQUIPEMENT_API_BASE_URL + "equipements");

    }
    getLatestEquipements(){
        return axios.get(EQUIPEMENT_API_BASE_URL+ "latestEquipement")
    }

    getEquipement(num_serie){
        return axios.get(EQUIPEMENT_API_BASE_URL + num_serie);

       
    }
    addEquipement( fd){
        return axios.post(EQUIPEMENT_API_BASE_URL + "equipement" , fd);
    }

    deleteEquipement(num_serie){
        return axios.delete(EQUIPEMENT_API_BASE_URL+num_serie);
    
    }

    updatePatient(num_serie, equipement){
        return axios.put(EQUIPEMENT_API_BASE_URL + num_serie, equipement);
    }

    getEquipementCount(){
        return axios.get(EQUIPEMENT_API_BASE_URL + "getEquipementCount")
    }



}



export default new EquipementService()
