package com.example.repository;

import com.example.models.Jobseeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@Repository
public interface JobseekerRepository extends JpaRepository<Jobseeker,String> {

    @Query(value = "SELECT * from appliedjobs where username=:username",nativeQuery = true)
    List<Jobseeker> findByUserName(@PathVariable("username") String username);

    @Query(value = "SELECT * from appliedjobs where username=:username",nativeQuery = true)
    List<Jobseeker> findAllByUsername(@PathVariable("username") String username);

    @Query(value = "SELECT * from appliedjobs where job_id=:jobid",nativeQuery = true)
    List<Jobseeker> findByJob(@PathVariable("jobid") String jobid);



}
