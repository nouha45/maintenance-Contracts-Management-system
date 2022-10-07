package com.example.demo.model;

import java.util.Date;

public interface IContractByEquipement {
    String getMarche();
    String getEquipement_num_serie();
    Date getDate_intervention();
    String getPrestataire();
    String getIntervenant();
    String getAction();
    String getCommentaire();
    String getNom();
}
