package com.nttdata.test.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(value = "Employee")
public class Employee {

    @Id
    private String id;


    private String name;


    private String numberPhone;

    @Indexed(unique = true)
    private String dni;

    private String address;


    private Date birthDate;

    @DocumentReference
    private Set<Office> offices = new HashSet<>();

}
