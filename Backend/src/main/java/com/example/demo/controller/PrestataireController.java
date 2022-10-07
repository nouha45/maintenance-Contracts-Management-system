package com.example.demo.controller;


import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Equipement;
import com.example.demo.model.ICounter;
import com.example.demo.model.Prestataire;
import com.example.demo.repository.PrestataireRepository;
import com.example.demo.service.PrestataireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/prestataires/")
public class PrestataireController {
    @Autowired
    private PrestataireRepository prestataireRepository;

    @Autowired
    private PrestataireService prestataireService;

    //get all service providers
    @GetMapping("/allProviders")
    public List<Prestataire> getAllServiceProviders(){
        return   prestataireRepository.findAll();

    }

    //create equipment reat api
    @PostMapping("/servicePrvider")
    public Prestataire createEquipment(@RequestBody Prestataire prestataire){
        return prestataireRepository.save(prestataire);
    }


    @DeleteMapping("/{nom}")
    public ResponseEntity<Map<String, Boolean>> deletePrestataire(@PathVariable String nom){
        Prestataire prestataire = prestataireRepository.findById(nom)
                .orElseThrow(() -> new ResourceNotFoundException("equipment not exist with id :" + nom));

        prestataireRepository.delete(prestataire);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/GetPrestataireCount")
    public ICounter getPrestataireCount(){
       return prestataireService.getPrestataireCount();
    }

}
