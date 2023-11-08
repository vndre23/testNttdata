package com.nttdata.test.service;

import com.nttdata.test.entity.Office;
import com.nttdata.test.repository.OfficeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OfficeServiceImpl implements IOfficeService{

    @Autowired
    private OfficeRepository officeRepository;
    @Override
    public List<Office> findAll() {
        return (List<Office>)officeRepository.findAll();
    }

    @Override
    public Optional<Office> findById(String id) {
        return officeRepository.findById(id);
    }

    @Override
    public Office save(Office office) {
        return officeRepository.save(office);
    }


    @Override
    public Office update(String id, Office office) {
        office.setId(id);
        return officeRepository.save(office);
    }


    @Override
    public void delete(String id) {
        officeRepository.deleteById(id);
    }


}
