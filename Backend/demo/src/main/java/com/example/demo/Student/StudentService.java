package com.example.demo.Student;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
@Component
public class StudentService {

    public List<Student> getStudents(){
        return List.of(
                new Student(
                        1L,
                        "nouhaila",
                        "nouhaila.elfahsi@gmail.com",
                        LocalDate.of(2000, Month.NOVEMBER,27),
                        21
                )
        );
    }
}
