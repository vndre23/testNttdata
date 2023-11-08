package com.nttdata.test.service;

import com.nttdata.test.entity.Employee;
import com.nttdata.test.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements IEmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Optional<Employee> findById(String id) {
        return employeeRepository.findById(id);
    }


    @Override
    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employee update(String id, Employee employee) {
        employee.setId(id);

        return employeeRepository.save(employee);

    }

    @Override
    public void delete(String id) {
        employeeRepository.deleteById(id);
    }
}
