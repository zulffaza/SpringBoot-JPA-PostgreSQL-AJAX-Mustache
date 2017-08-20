package com.example.demoajax.service;

import com.example.demoajax.model.Data;
import com.example.demoajax.repository.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class DataService {

    private DataRepository dataRepository;

    @Autowired
    public DataService(DataRepository dataRepository) {
        this.dataRepository = dataRepository;
    }

    public ArrayList<Data> getAllData() {
        return new ArrayList<>(dataRepository.findAll());
    }

    public Data getDataById(int id) {
        return dataRepository.findOne(id);
    }

    public Data addData(Data data) {
        return dataRepository.save(data);
    }

    public void deleteData(int id) {
        dataRepository.delete(id);
    }
}
