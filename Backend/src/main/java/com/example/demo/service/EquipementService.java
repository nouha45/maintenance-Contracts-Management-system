package com.example.demo.service;

import com.example.demo.model.ICounter;
import com.example.demo.model.IEquipement;
import com.example.demo.repository.EquipementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipementService {

    @Autowired
    private EquipementRepository equipementRepository;

    public List<IEquipement> getLatestEquipements(){
      return  equipementRepository.getLatestEquipements();
    }

    public ICounter getEquipementCount(){
        return equipementRepository.getEquipementCount();
    }


    public void deleteContractsByEquipement(String numSrie){
        equipementRepository.deleteContractsByEquipement(numSrie);
    }


}
