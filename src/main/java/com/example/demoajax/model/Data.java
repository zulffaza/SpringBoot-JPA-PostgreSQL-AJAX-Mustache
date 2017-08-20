package com.example.demoajax.model;

import javax.persistence.*;

@Entity
@Table(name = "data")
public class Data {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="data_id_seq")
    @SequenceGenerator(name="data_id_seq", sequenceName="data_id_seq", allocationSize = 1)
    @Column(name = "id")
    private int id;

    @Column(name = "nrp")
    private int nrp;

    @Column(name = "name")
    private String name;

    public Data() {
        this(0, null);
    }

    public Data(int nrp, String name) {
        this.nrp = nrp;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNrp() {
        return nrp;
    }

    public void setNrp(int nrp) {
        this.nrp = nrp;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
