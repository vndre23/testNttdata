package com.nttdata.test.controller;

import com.nttdata.test.entity.Employee;
import com.nttdata.test.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/api/employee")
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Employee save(@RequestBody Employee employee){

        return employeeService.save(employee);
    }


    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(employeeService.findAll(),HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public Optional<Employee> findById(@PathVariable String id){
        return employeeService.findById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        employeeService.delete(id);
    }
    @PutMapping("/{id}")
    public Employee update (@PathVariable String id, @RequestBody Employee employee){
        //if(employeeService.findById(id).isEmpty())
        return employeeService.update(id,employee);
    }



}
