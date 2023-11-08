package com.nttdata.test.service;

import com.nttdata.test.entity.Employee;

import java.util.List;
import java.util.Optional;

public interface IEmployeeService {
    List<Employee> findAll();

    Optional<Employee> findById(String id);

    Employee save(Employee employee);

    Employee update (String id, Employee employee);

    void delete(String id);
}
