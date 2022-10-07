package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name= "equipements")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Equipement {
    @Id

    private String num_serie;

    @Column(name="nom")
    private String nom;

    @Column(name="designation")
    private  String designation;

    @Column(name= "modele")
    private String madele;

    @Column(name="marque")
    private String marque;

    @Column(name="details")
    private  String details;

    @Column(name="date")
    private Date date;
    @OneToMany(mappedBy = "marche", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonIgnore
    private Set<Contract> contracts;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "equipement_images", joinColumns ={
            @JoinColumn(name="num_serie")
    },
            inverseJoinColumns = {
            @JoinColumn(name="image_id")
            }
    )
    private Set<ImageModel> images;







}
