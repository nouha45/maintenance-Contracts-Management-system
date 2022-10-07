package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="image_model")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ImageModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="type")
    private String type;
    @Column(length = 50000000)
    private byte[] picByte;

    public ImageModel(String name, String type, byte[] bytes) {
        this.name = name;
    }
}
