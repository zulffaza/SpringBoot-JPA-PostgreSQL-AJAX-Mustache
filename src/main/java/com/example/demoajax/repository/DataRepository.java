package com.example.demoajax.repository;

import com.example.demoajax.model.Data;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DataRepository extends JpaRepository<Data, Integer> {

    public Data findByNrp(int nrp);
    public Data findByName(String name);
    public void deleteByNrp(int nrp);
}
