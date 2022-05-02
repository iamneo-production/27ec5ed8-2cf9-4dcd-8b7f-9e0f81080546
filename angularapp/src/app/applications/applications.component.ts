import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobseeker } from '../models/jobseeker.model';
import { JobseekerService } from '../_services/jobseeker.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  application1!:Jobseeker[];

  constructor(private Jobseeker:JobseekerService,
    private router:Router,
    private route:ActivatedRoute) { }

  getApplications(id:string){
    this.Jobseeker.getApplication(id).subscribe(
      data=>{
        this.application1=data;
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
    this.getApplications(this.route.snapshot.params['id']);

    
  }

}
