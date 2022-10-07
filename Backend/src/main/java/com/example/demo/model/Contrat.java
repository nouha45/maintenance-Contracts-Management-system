package com.example.demo.model;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Contrat {
    private String marche;
    private String nom;
    private String equipement_num_serie;
    private Date date_intervention;
    private String prestataire;
    private String intervenant;
    private String action;
    private String commentaire;
}
