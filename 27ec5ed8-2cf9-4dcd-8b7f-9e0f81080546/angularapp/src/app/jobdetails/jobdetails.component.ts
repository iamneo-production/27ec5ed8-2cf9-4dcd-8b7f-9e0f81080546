import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


import { Component, OnInit } from '@angular/core';

import { CustomerApplicationService } from '../_services/customer-application.service';

import { TokenStorageService } from '../_services/token-storage.service';
import { Jobseeker } from '../models/jobseeker.model';
import { CustomerApplication } from '../models/customer-application.model';
import { JobseekerService } from '../_services/jobseeker.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {

  public jobCard:CustomerApplication[] = [];
  public editjob:CustomerApplication | any
  room="";
  isAdminLoggedin=false;
  
  

  capplication: CustomerApplication={
    job_description:'',
    wage_per_day:'',
    from_date:'',
    to_date:'',
    job_location:'',
    address:'',
    phone_number:'',
    experience:'',
    status:'',
  }

  application1: Jobseeker={
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
    private customer:CustomerApplicationService,
    private JobSeeker:JobseekerService,
    private route:ActivatedRoute,
    private router: Router
  ) {}

  public _getCard():void{
      this.customer.getall(det).subscribe(
        (response: CustomerApplication[])=>{
            this.jobCard=response;
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
      );
  }


  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      if(this.tokenStorage.getUser().roles == 'ROLE_ADMIN'){
        this.isAdminLoggedin=true;
      }
      this.username = this.tokenStorage.getUser().username;
      this._getCard();
      
    }
  }


  // onclickapplied(){
  //   if(this.route.snapshot.params['id']=='Completed'){
  //     this.router.navigate(['../appliedjobs'],{relativeTo:this.route});
  //     this.room='applied';
  //   }
  //   else{
  //     this.router.navigate(['applied'],{relativeTo:this.route});
  //   }
  // }
  // onclickrejected(){
  //   if(this.route.snapshot.params['id']=='applied'){
  //     this.router.navigate(['../rejected'],{relativeTo:this.route})
  //     this.room='rejected';
  //   }
  //   else{
  //     this.router.navigate(['rejected'],{relativeTo:this.route});
  //   }
  // }
  // onclickpending(){
  //   if(this.route.snapshot.params['id']=='accepted'){
  //     this.router.navigate(['../'],{relativeTo:this.route});
  //    }
  //    else if(this.route.snapshot.params['id']=='rejected'){
  //     this.router.navigate(['../'],{relativeTo:this.route});
  //    }

  // }

  onSubmit():void{
    const jobId=window.localStorage.getItem("jobId")
    const det1={
      jobid:jobId,
      name:this.application1.name,
      dob:this.application1.dob,
      age:this.application1.age,
      phone_number:this.application1.phone_number,
      nationality:this.application1.nationality,
      address:this.application1.address,
      experience:this.application1.experience,
      verification_id:this.application1.verification_id,
      status:'pending',
    };
    this.JobSeeker.post(det1).subscribe()
    console.log(det1);
    this.reloadPage();
  }


  onapply(id:any){
    console.log(id)
    window.localStorage.setItem("jobId",id)
  }




  onapplied(application1:Jobseeker){
    application1.status='applied';
    const det1={
      jobid: this.application1.jobid,
      name:this.application1.name,
      dob:this.application1.dob,
      age:this.application1.age,
      phone_number:this.application1.phone_number,
      nationality:this.application1.nationality,
      address:this.application1.address,
      experience:this.application1.experience,
      verification_id:this.application1.verification_id,
      status:'js_applied',
    };
    this.JobSeeker.update(det1,this.application1.jobid).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

reloadPage(): void {
  window.location.reload();
  this.router.navigate(['login'])
}


}
function det(det: any) {
  throw new Error('Function not implemented.');
}

