package com.example.repository;

import com.example.models.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job,String> {

    @Query(value = "SELECT * from job where username=:username",nativeQuery = true)
    List<Job> findByUserName(@PathVariable("username") String username);
}
