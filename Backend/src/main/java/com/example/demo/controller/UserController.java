package com.example.demo.controller;


import com.example.demo.model.Equipement;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000" , allowCredentials = "true")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/Login")
    public ResponseEntity<User> login(@RequestBody User user){
     User user1= userService.authenticate(user.getUsername(), user.getPassword());
     if(Objects.nonNull(user1)){
         return new ResponseEntity<>(user1,HttpStatus.OK);
     }


      else{      return new ResponseEntity<>(
                    user1,
                    HttpStatus.BAD_REQUEST);

    }}


}
