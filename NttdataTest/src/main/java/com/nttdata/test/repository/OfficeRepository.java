package com.nttdata.test.repository;

import com.nttdata.test.entity.Office;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfficeRepository extends MongoRepository<Office,String> {
}
