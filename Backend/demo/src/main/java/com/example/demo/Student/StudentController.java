package com.example.demo.Student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController


public class StudentController {

    private final StudentService studentService;
    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    @RequestMapping(path = "student")
    @GetMapping()
    public List<Student> getStudents(){
        return studentService.getStudents();

    }
}
