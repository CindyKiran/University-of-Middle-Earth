package com.littleworld.todo.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Student extends Persoon {
    private int studiePunten;
    private String uploads;

//    @OneToMany
//    private Set<Vak> vakken;
//
//    public Set<Vak> getVakken() {
//        return vakken;
//    }
//
//    public void setVakken(Set<Vak> vakken) {
//        this.vakken = vakken;
//    }

//    public String opleiding;
//
//    public String getOpleiding() {
//        return opleiding;
//    }
//
//    public void setOpleiding(String opleiding) {
//        this.opleiding = opleiding;
//    }

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Opleiding opleiding;

    public Opleiding getOpleiding() {
        return opleiding;
    }

    public void setOpleiding(Opleiding opleiding) {
        this.opleiding = opleiding;
    }

    public int getStudiePunten() {
        return studiePunten;
    }

    public void setStudiePunten(int studiePunten) {
        this.studiePunten = studiePunten;
    }

    public void inschrijven(){

    }
    public void huiswerkInleveren(){

    }
    public void tentamenMaken(){

    }

    public String getUploads() {
        return uploads;
    }

    public void setUploads(String uploads) {
        this.uploads = uploads;
    }
}
