package com.example.demo.repository;

import com.example.demo.model.Equipement;
import com.example.demo.model.ICounter;
import com.example.demo.model.IEquipement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EquipementRepository extends JpaRepository<Equipement, String>{

    @Query(nativeQuery = true, value = "call getLatestEquipement()")
    List<IEquipement> getLatestEquipements();

    @Query(nativeQuery = true, value = "call getEquipementCount()")
    ICounter getEquipementCount();
    @Modifying
    @Query(nativeQuery = true, value = "call deleteContractsByEquipement(:numSerie)")
    void deleteContractsByEquipement(String numSerie);

}
