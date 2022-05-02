import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerApplication } from '../models/customer-application.model';
import { Jobseeker } from '../models/jobseeker.model';
import { CustomerApplicationService } from '../_services/customer-application.service';
import { JobseekerService } from '../_services/jobseeker.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-appliedjobs',
  templateUrl: './appliedjobs.component.html',
  styleUrls: ['./appliedjobs.component.css']
})
export class AppliedjobsComponent implements OnInit {
  jjobCard!:Jobseeker[];

  // type seeker={
  //   job?:Job[];
  //   jobid?:String;
  //   name?:String;
  //   age?:String;
  //   dob?:String;
  //   phone_number?:String;
  //   nationality?:String;
  //   verification_id?:String;
  //   experience?:String;
  //   address?:String;
  //   status?:String;
  //   username?:String;
  // }
  

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username= '';

  constructor(
    private tokenStorage: TokenStorageService,
    private customer:CustomerApplicationService,
    private JobSeeker:JobseekerService,
    private route:ActivatedRoute,
    private router: Router

  ) { }


// public getJCard():void{
//   this.JobSeeker.get(det).subscribe(
//     (response: Jobseeker[])=>{
//         this.jjobCard=response;
//     },
//     (error: HttpErrorResponse)=>{
//       alert(error.message);
//     }
//   );
// }

ngOnInit(): void {
  this.JobSeeker.get().subscribe(
    (response)=>{
      if(response){
        // this.jjobCard=response;
        this.jjobCard=Object.assign(new Jobseeker,response);
        console.log(this.jjobCard);
      } 
    }
  )
}

reloadPage(): void {
  window.location.reload();
}
}







function det(det: any) {
  throw new Error('Function not implemented.');
}

