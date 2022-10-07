package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "prestataire")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Prestataire {

    @Id
    private String nom;

}
