import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerApplication } from '../models/customer-application.model';
import { Jobseeker } from '../models/jobseeker.model';
import { AuthService } from '../_services/auth.service';
import { JobseekerService } from '../_services/jobseeker.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public ajobCard: CustomerApplication[] = [];
  jobseekers:Jobseeker[]=[];
  

  // application1: Jobseeker={
  //   jobid:'',
  //   name:'',
  //   dob:'',
  //   age:'',
  //   phone_number:'',
  //   nationality:'',
  //   verification_id:'',
  //   experience:'',
  //   address:'',
  //   status:'',

  // }

  application: Jobseeker={
    jobid:'',
    name:'',
    dob:'',
    age:'',
    phone_number:'',
    nationality:'',
    verification_id:'',
    experience:'',
    address:'',
    status:'',

  }



  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username= '';

  constructor(
    private tokenStorage: TokenStorageService,
    private jobseeker:JobseekerService,
    private route:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
   this.getAllJobseeker();
  }

  getAllJobseeker():void{
    this.jobseeker.getAll(det).subscribe(
      response=>{
        if(response){
          this.jobseekers=response;
        }
        console.log(response)
      }
    )
  }

  // logout():void{
  //   this.tokenStrorageService.signOut()
  //   this.isLoggedin=false;
  //   window.location.reload
  //   this.route.navigate(['login'])
    
    
  // }

  //delete

  public _deleteJobseeker(id:any){
    this.jobseeker.deleteJobseekerById(id).subscribe(
      (response: void) => {
          console.log(response);
          // this._getCard();
      },
      (error: HttpErrorResponse)=>{
       
      }
    );
    this.reloadPage();

}

//update

public getjobseekerId(application:Jobseeker){
  this.application=application;
  
}

onSubmit():void{
  const det={
    name:this.application.name,
    age:this.application.age,
    dob:this.application.dob,
    phone_number:this.application.phone_number,
    nationality:this.application.nationality,
    verification_id:this.application.verification_id,
    address:this.application.address,
    experience:this.application.experience,
  };
  console.log(det);
  this.jobseeker.update(det,this.application.id).subscribe(
    response=>{
      if(response){
        console.log(response);
      }
      console.log(response);
    }
  )
  this.reloadPage();
}



reloadPage(): void {
  window.location.reload();
}

}
function det(det: any) {
  throw new Error('Function not implemented.');
}

