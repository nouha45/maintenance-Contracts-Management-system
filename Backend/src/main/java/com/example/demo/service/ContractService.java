package com.example.demo.service;

import com.example.demo.model.Contract;
import com.example.demo.model.Contrat;
import com.example.demo.model.IContractByEquipement;
import com.example.demo.model.ICounter;
import com.example.demo.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractService {

    @Autowired
    private ContractRepository contractRepository;



    public void saveContract(Contrat contract){
        contractRepository.addContract(contract.getMarche(),contract.getEquipement_num_serie(),contract.getDate_intervention(),contract.getPrestataire(),contract.getIntervenant(),contract.getAction(),contract.getCommentaire());
    }

    public List<IContractByEquipement> getContractsEquipement(String equipement_num_serie){
        return contractRepository.getContractsByEquipement(equipement_num_serie);
    }
    public IContractByEquipement getContractMarche(String marche){
        return contractRepository.getContractByMarche(marche);
    }

    public void editContract(Contrat contract){
        contractRepository.editContract(contract.getMarche(),contract.getEquipement_num_serie(),contract.getDate_intervention(),contract.getPrestataire(),contract.getIntervenant(),contract.getAction(),contract.getCommentaire());
    }

    public void deleteContract(String marche){
         contractRepository.deleteContract(marche);
    }

    public ICounter getContactCount(){
        return contractRepository.getContractCount();
    }
}
