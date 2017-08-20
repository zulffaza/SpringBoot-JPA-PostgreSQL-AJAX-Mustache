package com.example.demoajax.apicontroller;

import com.example.demoajax.model.Data;
import com.example.demoajax.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class DataController {

    private DataService dataService;

    @Autowired
    public DataController(DataService dataService) {
        this.dataService = dataService;
    }

    @GetMapping("/getAllData")
    public ArrayList<Data> getAllData() {
        return dataService.getAllData();
    }

    @GetMapping("/getDataById/{id}")
    public Data getData(@PathVariable int id) {
        return dataService.getDataById(id);
    }

    @PostMapping("/addData")
    public Data addData(@RequestBody Data data) {
        return dataService.addData(data);
    }

    @GetMapping("/deleteData/{id}")
    public void deleteData(@PathVariable int id) {
        dataService.deleteData(id);
    }
}
