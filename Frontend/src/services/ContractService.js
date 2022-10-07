import axios from "axios";
import React from 'react'

const CONTRACT_API_BASE_URL =`http://localhost:8080/contracts/`

class ContractService{
    addContract(contract){
        console.log('ana f service')
        return axios.post(CONTRACT_API_BASE_URL + "contract" , contract)
    }


    getContractsByEquipement(numSerie){
        return axios.get(CONTRACT_API_BASE_URL +  numSerie)
    }

    getContractByMarche(marche){
        return axios.get(CONTRACT_API_BASE_URL + "contratByMarche/" + marche)
    }


    updateContract(contract){
        return axios.post(CONTRACT_API_BASE_URL + "editContract", contract)
    }

    deleteContract(marche){
        return axios.post(CONTRACT_API_BASE_URL + "deleteContract/" + marche)
    }
    getContractCount(){
        return axios.get(CONTRACT_API_BASE_URL + "getContractCount")
    }
    }

export default new ContractService();