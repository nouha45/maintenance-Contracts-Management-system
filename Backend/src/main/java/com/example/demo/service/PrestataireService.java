package com.example.demo.service;

import com.example.demo.model.ICounter;
import com.example.demo.repository.PrestataireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrestataireService {
    @Autowired
  private  PrestataireRepository prestataireRepository;

    public ICounter getPrestataireCount(){
      return   prestataireRepository.getPrestataireCount();
    }

}
