package com.example.demo.controller;

import java.util.Map;
import java.util.Objects;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import com.example.demo.model.User;
import com.example.demo.service.EmailServiceImp;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.mail.SimpleMailMessage;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@EnableAutoConfiguration
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/PasswordReset")
public class PasswordController {

    @Autowired
    private UserService userService;

    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private EmailServiceImp emailService= new EmailServiceImp(mailSender);



    // Process form submission from forgotPassword page
    @PostMapping("/{userEmail}")
    public String processForgotPasswordForm( @PathVariable String userEmail, HttpServletRequest request) {

        // Lookup user in database by e-mail
       User optional = userService.findUserByEmail(userEmail);

        if (!Objects.nonNull(optional)) {
    return "email not found in data base";
        } else {

            // Generate random 36-character string token for reset password
            User user = optional;
            user.setResetPasswordToken(UUID.randomUUID().toString());

            // Save token to database
            userService.saveUser(user);

            String appUrl = request.getScheme() + "://" + request.getServerName() +":3000";

            // Email message
            SimpleMailMessage passwordResetEmail = new SimpleMailMessage();
            passwordResetEmail.setFrom("support@demo.com");
            passwordResetEmail.setTo(user.getEmail());
            passwordResetEmail.setSubject("Password Reset Request");
            passwordResetEmail.setText("To reset your password, click the link below:\n" + appUrl
                    + "/reset/" + user.getResetPasswordToken());
            System.out.println(passwordResetEmail.getText());
            emailService.sendEmail(passwordResetEmail);
       return "recovery email sent";

        }



    }


    // Process reset password form
    @PostMapping("/reset/{token}")
    public String setNewPassword( @PathVariable String token, @RequestBody String password) {

        // Find the user associated with the reset token
        User user = userService.findUserByResetToken(token);

        // This should always be non-null but we check just in case
        if (Objects.nonNull(user)) {

            User resetUser = user;

            // Set new password
            resetUser.setPassword(password);

            // Set the reset token to null so it cannot be used again
            resetUser.setResetPasswordToken(null);

            // Save user
            userService.saveUser(resetUser);

            // In order to set a model attribute on a redirect, we must use
            // RedirectAttributes
            //redir.addFlashAttribute("successMessage", "You have successfully reset your password.  You may now login.");

            //modelAndView.setViewName("redirect:login");
            //return modelAndView;
   return "";
        } else {
           // modelAndView.addObject("errorMessage", "Oops!  This is an invalid password reset link.");
            //modelAndView.setViewName("resetPassword");
            return "";
        }

        //return modelAndView;
    }

    // Going to reset page without a token redirects to login page
    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ModelAndView handleMissingParams(MissingServletRequestParameterException ex) {
        return new ModelAndView("redirect:login");
    }
}
