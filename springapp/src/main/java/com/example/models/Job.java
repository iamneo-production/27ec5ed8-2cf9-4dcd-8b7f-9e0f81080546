package com.example.models;


import javax.persistence.*;

@Entity
@Table(name="job")
public class Job {
    @Id
    private String id;
    private String job_description;
    private String wage_per_day;
    private String from_date;
    private String to_date;
    private String job_location;
    private String phone_number;
    private String experience;
    private String address;
    private String status;
    private String username;

    public Job() {

    }
    public Job(String id, String job_description, String wage_per_day, String from_date, String to_date, String job_location, String phone_number, String experience, String address, String status, String username) {
        this.id = id;
        this.job_description = job_description;
        this.wage_per_day = wage_per_day;
        this.from_date = from_date;
        this.to_date = to_date;
        this.job_location = job_location;
        this.phone_number = phone_number;
        this.experience = experience;
        this.address = address;
        this.status = status;
        this.username = username;
    }
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getJob_description() {
        return job_description;
    }

    public void setJob_description(String job_description) {
        this.job_description = job_description;
    }

    public String getWage_per_day() {
        return wage_per_day;
    }

    public void setWage_per_day(String wage_per_day) {
        this.wage_per_day = wage_per_day;
    }

    public String getFrom_date() {
        return from_date;
    }

    public void setFrom_date(String from_date) {
        this.from_date = from_date;
    }

    public String getTo_date() {
        return to_date;
    }

    public void setTo_date(String to_date) {
        this.to_date = to_date;
    }

    public String getJob_location() {
        return job_location;
    }

    public void setJob_location(String job_location) {
        this.job_location = job_location;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}