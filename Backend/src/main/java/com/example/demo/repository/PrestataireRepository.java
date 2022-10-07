package com.example.demo.repository;

import com.example.demo.model.ICounter;
import com.example.demo.model.IEquipement;
import com.example.demo.model.Prestataire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrestataireRepository extends JpaRepository<Prestataire, String> {
    @Query(nativeQuery = true, value = "call getPrestataireCount()")
    ICounter getPrestataireCount();
}
