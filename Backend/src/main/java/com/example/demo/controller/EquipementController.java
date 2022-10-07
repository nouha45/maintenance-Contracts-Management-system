package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Equipement;
import com.example.demo.model.ICounter;
import com.example.demo.model.IEquipement;
import com.example.demo.model.ImageModel;
import com.example.demo.repository.EquipementRepository;
import com.example.demo.service.EquipementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class EquipementController {

    @Autowired
    private EquipementRepository equipementRepository;
    @Autowired
   private EquipementService equipementService;


    //get all equipments
    @GetMapping("/equipements")
    public List<Equipement> getAllEquipements(){
      return   equipementRepository.findAll();

    }
    @GetMapping("/latestEquipement")
    public List<IEquipement> getLatestEquipements(){
        return  equipementService.getLatestEquipements();
    }

    @GetMapping("/{numSerie}")
    public Optional<Equipement> getEquipement( @PathVariable String numSerie){
        return equipementRepository.findById(numSerie);
    }

    @GetMapping("/getEquipementCount")

    public ICounter getEquipementCount(){
        return equipementService.getEquipementCount();
    }

    //create equipment reat api
    @PostMapping(value = {"/equipement"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public Equipement createEquipment(@RequestPart("equipement") Equipement equipment,
                                      @RequestPart("imageFile")MultipartFile[] file){
        //return equipementRepository.save(equipment);
        try{
          Set<ImageModel> images = uploadImage(file);
            return equipementRepository.save(equipment);
        }catch(Exception e){
        System.out.println(e.getMessage());
            return null;
        }

    }

    public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException{
        Set<ImageModel> imageModels = new HashSet<>();

        for (MultipartFile file : multipartFiles){
            ImageModel imageModel = new ImageModel(
                    file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes()
            );
            imageModels.add(imageModel);
            System.out.println(" ajoutet imageModel");

        }
        return imageModels;
    }
    @Transactional
    @DeleteMapping("/{numSerie}")
    public ResponseEntity<Map<String, Boolean>> deleteEquipement(@PathVariable String numSerie){

        Equipement equipement = equipementRepository.findById(numSerie)
                .orElseThrow(() -> new ResourceNotFoundException("equipment not exist with id :" + numSerie));
         equipementService.deleteContractsByEquipement(numSerie);
        equipementRepository.delete(equipement);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //update equipment
    @PutMapping("/{num_serie}")
    public ResponseEntity<Equipement> updateEquipement(@PathVariable String num_serie, @RequestBody Equipement equipmentDetails){
        Equipement equipement = equipementRepository.findById(num_serie).orElseThrow(()->new ResourceNotFoundException("equipment not found"));

        equipement.setNom(equipmentDetails.getNom());
        equipement.setDesignation(equipmentDetails.getDesignation());
        equipement.setMarque(equipmentDetails.getMarque());
        equipement.setMadele(equipmentDetails.getMadele());
        equipement.setDetails(equipmentDetails.getDetails());
        equipement.setDate(equipmentDetails.getDate());
        Equipement updatedPatient = equipementRepository.save(equipement);
        return ResponseEntity.ok(updatedPatient);
    }


}
