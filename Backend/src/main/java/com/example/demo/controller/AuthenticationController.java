/*package com.example.demo.controller;


import com.example.demo.model.MyUserDetails;
import org.json.JSONException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.json.JSONObject;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000" , allowCredentials = "true")
public class AuthenticationController {

    private static Logger log = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/login")
    public ResponseEntity<String> home(Authentication auth) throws JSONException {
        MyUserDetails myUserDetails = (MyUserDetails) auth.getPrincipal();
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("role", myUserDetails.getAuthorities());
        return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
    }

}*/
