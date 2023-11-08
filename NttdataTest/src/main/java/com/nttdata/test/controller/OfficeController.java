package com.nttdata.test.controller;

import com.nttdata.test.entity.Office;
import com.nttdata.test.service.IOfficeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/api/office")
public class OfficeController {

    @Autowired
    private IOfficeService officeService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Office save(@RequestBody Office office){
        return officeService.save(office);
    }


    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Office> findAll(){
        return officeService.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Office> findById(@PathVariable String id){
        return officeService.findById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        officeService.delete(id);
    }
    @PutMapping("/{id}")
    public Office update (@PathVariable String id, @RequestBody Office office){
        //if(employeeService.findById(id).isEmpty())
        return officeService.update(id,office);
    }
}
