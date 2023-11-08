package com.nttdata.test.service;

import com.nttdata.test.entity.Office;

import java.util.List;
import java.util.Optional;

public interface IOfficeService {
    List<Office> findAll();

    Optional<Office> findById(String id);

    Office save(Office office);

    Office update(String id,Office office);

    void delete(String id);
}
