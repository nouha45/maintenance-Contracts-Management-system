package com.example.demo.controller;


import com.example.demo.model.Contract;

import com.example.demo.model.Contrat;
import com.example.demo.model.IContractByEquipement;
import com.example.demo.model.ICounter;
import com.example.demo.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RequestMapping("/contracts")
@RestController
public class ContractController {
    @Autowired
    ContractService contractService;

    //create add rest api
    @PostMapping("/contract")
    public ResponseEntity<String> createContract(@RequestBody Contrat contract){
        contractService.saveContract(contract);
        return new ResponseEntity<String>("{message: appointment request sent}", HttpStatus.OK);
    }

    @GetMapping("{numSerie}")
    public List<IContractByEquipement> getContractsByEquipement(@PathVariable String numSerie){

        return contractService.getContractsEquipement(numSerie);
    }
    @GetMapping("/contratByMarche/{marche}")
    public IContractByEquipement getContractByMarche(@PathVariable String marche){

        return contractService.getContractMarche(marche);
    }


    @PostMapping("/editContract")
    public void editContract(@RequestBody Contrat contract){

        contractService.editContract(contract);
    }

    @PostMapping("/deleteContract/{marche}")
    public void deleteContract(@PathVariable String marche){

        contractService.deleteContract(marche);
    }
    @GetMapping("/getContractCount")
    public ICounter getContractCount(){
        return contractService.getContactCount();
    }


}
