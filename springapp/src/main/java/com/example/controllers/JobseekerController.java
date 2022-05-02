package com.example.controllers;

import com.example.dto.jobseekerDTO;
import com.example.models.Jobseeker;
import com.example.security.services.JobseekerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController

@RequestMapping("/")
public class JobseekerController {
    @Autowired
    private JobseekerService service;

    @PostMapping("/addjobseeker")
    public Jobseeker saveJobseeker(@RequestBody jobseekerDTO jsdto ){
        return service.saveJobseeker(jsdto);
    }

//    @PostMapping("/updatejobseeker/{id}")
//    public Jobseeker updatejobseeker(@RequestBody jobseekerDTO jobseekerDTO, @PathVariable String id){
//        return service.updateJobseeker(jobseekerDTO,id);
//    }

    @GetMapping("/getAllJobSeekers")
    public  List<Jobseeker> getAllAppliedJobs(){return service.getAllAppliedJobs();}


//    @GetMapping("/getall")
//    public  Jobseeker getAll(@RequestBody jobseekerDTO jobseekerDTO, @PathVariable String jobid){
//        return service.getAll(jobseekerDTO,jobid);
//    }

    @GetMapping("/AppliedJobs")
    public List<Jobseeker> getAllByUsername(){
        return service.getAllByUsername();
    }


    @DeleteMapping("/deletejobseeker/{id}")
    public String deleteJobSeeker(@PathVariable String id){
        return service.deleteJobSeeker(id);
    }

    @GetMapping("/viewapplications/{id}")
    public  List<Jobseeker> getApplications(@PathVariable String id){
        return service.getApplications(id);
    }


}
