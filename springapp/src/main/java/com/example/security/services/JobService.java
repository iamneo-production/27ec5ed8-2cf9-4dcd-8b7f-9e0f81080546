package com.example.security.services;

import com.example.dto.jobDTO;
import com.example.models.Job;
import com.example.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class JobService {
    @Autowired
    private JobRepository repo;

    public Job saveJob(jobDTO jdto) {
        SimpleDateFormat formatter = new SimpleDateFormat("ddMMyyyyHHmmss");
        Date date = new Date();
        String str = "" + formatter.format(date);

        Job job = new Job();
        job.setJob_location(jdto.getJob_location());
        job.setWage_per_day(jdto.getWage_per_day());
        job.setAddress(jdto.getAddress());
        job.setExperience(jdto.getExperience());
        job.setJob_description(jdto.getJob_description());
        job.setTo_date(jdto.getTo_date());
        job.setFrom_date(jdto.getFrom_date());
        job.setWage_per_day(jdto.getWage_per_day());
        job.setStatus("pending");
        job.setPhone_number(jdto.getPhone_number());
        UserDetailsImpl s = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        job.setId(str);
        job.setUsername(s.getUsername());
        return repo.save(job);
    }

    public Job updateJob(jobDTO jdto, String id) {
        Optional<Job> job = repo.findById(id);
        job.get().setJob_location(jdto.getJob_location());
        job.get().setWage_per_day(jdto.getWage_per_day());
        job.get().setAddress(jdto.getAddress());
        job.get().setExperience(jdto.getExperience());
        job.get().setJob_description(jdto.getJob_description());
        job.get().setTo_date(jdto.getTo_date());
        job.get().setFrom_date(jdto.getFrom_date());
        job.get().setWage_per_day(jdto.getWage_per_day());
        job.get().setStatus("pending");
        job.get().setPhone_number(jdto.getPhone_number());
        UserDetailsImpl s = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return repo.save(job.get());
    }

    public  List<Job> getAllById(){
        UserDetailsImpl s = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Job> dets=repo.findByUserName(s.getUsername());
        return dets;
    }

    public List<Job> getJobs() {
        return repo.findAll();
    }

//    public  Job getJobByName(String name){
//        return  repo.findByName(name);
//    }

    public String deleteJob(String id) {
        repo.deleteById(id);
        return "Job Removed !!" + id;
    }
}


