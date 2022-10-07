package com.example.demo.service;


import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User authenticate(String username, String password){
        return userRepository.findByUsernameAndPassword(username, password);
    }

    public User findUserByEmail(String email){
     return   userRepository.findByEmail(email);
    }

    public void saveUser(User user){
        userRepository.save(user);
    }

    public User findUserByResetToken(String resetToken) {
        return userRepository.findByResetPasswordToken(resetToken);
    }
}
