package com.example.security.services;

import com.example.dto.jobseekerDTO;
import com.example.models.Job;
import com.example.models.Jobseeker;
import com.example.repository.JobRepository;
import com.example.repository.JobseekerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class JobseekerService {
    @Autowired
    private JobseekerRepository repo;

    @Autowired
    private JobRepository jobrepo;

    public Jobseeker saveJobseeker(jobseekerDTO jsdto) {
        SimpleDateFormat formatter = new SimpleDateFormat("ddMMyyyyHHmmss");
        Date date = new Date();
        String str = "" + formatter.format(date);
        Optional<Job> jjob = jobrepo.findById(jsdto.getJobid());

        Jobseeker js1 = new Jobseeker();
        js1.setJob(jjob.get());
        js1.setName(jsdto.getName());
        js1.setAddress(jsdto.getAddress());
        js1.setExperience(jsdto.getExperience());
        js1.setDob(jsdto.getDob());
        js1.setAge(jsdto.getAge());
        js1.setVerification_id(jsdto.getVerification_id());
        js1.setNationality(jsdto.getNationality());
        js1.setPhone_number(jsdto.getPhone_number());
        js1.setStatus("Applied");
        UserDetailsImpl x = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        js1.setId(str);
        js1.setUsername(x.getUsername());
        return repo.save(js1);

    }

//    public Jobseeker updateJobseeker(jobseekerDTO jsdto, String id) {
//        Optional<Jobseeker> js1 = repo.findById(id);
//        js1.get().setName(jsdto.getName());
//        js1.get().setAddress(jsdto.getAddress());
//        js1.get().setExperience(jsdto.getExperience());
//        js1.get().setDob(jsdto.getDob());
//        js1.get().setAge(jsdto.getAge());
//        js1.get().setVerification_id(jsdto.getVerification_id());
//        js1.get().setNationality(jsdto.getNationality());
//        js1.get().setPhone_number(jsdto.getPhone_number());
//        js1.get().setJobid(jsdto.getJobid());
//        js1.get().setStatus("Applied");
//        UserDetailsImpl x = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        return repo.save(js1.get());
//    }

    public List<Jobseeker> getAllAppliedJobs() {
        UserDetailsImpl x = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Jobseeker> details = repo.findByUserName(x.getUsername());
        return details;
    }

    public List<Jobseeker> getAllByUsername() {
        UserDetailsImpl x = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Jobseeker> js1 = repo.findAllByUsername(x.getUsername());
        return js1;
    }

    public List<Jobseeker> getApplications(String Id){
        List<Jobseeker> j = repo.findByJob(Id);
        return j;
    }


    public String deleteJobSeeker(String id) {
        repo.deleteById(id);
        return "Job Removed !!" + id;
    }
}

