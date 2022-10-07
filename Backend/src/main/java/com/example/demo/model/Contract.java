package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name= "contract")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Contract {

    @Id
    private String marche;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    @JsonIgnore
    @MapsId("equipement_num_serie")
    private Equipement equipement;

    @Column(name="prestataire")
    private String prestataire;

    @Column(name="intervenant")
    private String intervenant;

    @Column(name="date_intervention")
    private Date dateIntervention;

    @Column(name="action")
    private String action;

    @Column(name="commentaire")
    private String commentaire;


}
