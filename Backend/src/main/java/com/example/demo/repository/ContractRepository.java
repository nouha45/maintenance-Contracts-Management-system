package com.example.demo.repository;

import com.example.demo.model.Contract;
import com.example.demo.model.IContractByEquipement;
import com.example.demo.model.ICounter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;


@Repository
@Transactional
public interface ContractRepository extends JpaRepository<Contract, String> {

    @Modifying
    @Query(nativeQuery = true,value="call addContract(:marche,:equipement_num_serie,:date_intervention, :prestataire, :intervenant, :action, :commentaire)")
    void addContract(String marche, String equipement_num_serie, Date date_intervention, String prestataire, String intervenant, String action, String commentaire );

    @Query(nativeQuery = true, value="call getContractsByEquipement(:equipement_num_serie)")
    List<IContractByEquipement> getContractsByEquipement(String equipement_num_serie);

    @Modifying
    @Query(nativeQuery = true,value="call editContractByEquipment(:marche,:equipement_num_serie,:date_intervention, :prestataire, :intervenant, :action, :commentaire)")
    void editContract(String marche, String equipement_num_serie, Date date_intervention, String prestataire, String intervenant, String action, String commentaire);

    @Query(nativeQuery = true, value="call getContractByMarche(:marche)")
    IContractByEquipement getContractByMarche(String marche);

    @Modifying
    @Query(nativeQuery = true,value="call deleteContract(:marche)")
    void deleteContract(String marche);


    @Query(nativeQuery = true, value="call getContractCount()")
    ICounter getContractCount();
}
