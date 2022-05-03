import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CustomerApplicationService } from '../_services/customer-application.service';

import { TokenStorageService } from '../_services/token-storage.service';
import { CustomerApplication } from '../models/customer-application.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  public jobCard: CustomerApplication[] = [];
  // public job:CustomerJob | undefined
  public editjob:CustomerApplication | any
  isShow = true;
  public token1="";
  room="";
  isAdminLoggedin=false;

  application: CustomerApplication={
    id:'',
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
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username= '';
  constructor(
    private tokenStorage: TokenStorageService,
    private customer:CustomerApplicationService,
    private router: Router
  ) { }


  public _getCard():void{
    this.customer.getAllById().subscribe(
      response=>{
        if(response){
          this.jobCard=response;
        }
        console.log(response)
        
      },
    );
}

public getJobs():void{
  this.customer.getall(det).subscribe(
    response=>{
      if(response){
        this.jobCard=response;
      }
      console.log(response)
      
    },
  );
}

  public getjobId(application:CustomerApplication){
      this.application=application;
      
  }

  // if (this.tokenStorage.getToken()) {
  //   this.isLoggedIn = true;
  //   this.roles = this.tokenStorage.getUser().roles;
  //   if(this.tokenStorage.getUser().roles == 'ROLE_ADMIN'){
  //     this.isAdminLoggedin=true;
  //   }
  //   this.username = this.tokenStorage.getUser().username;
  //   this._getCard();
    
  // }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      if(this.tokenStorage.getUser().roles == 'ROLE_ADMIN'){
            this.isAdminLoggedin=true;
            this.username = this.tokenStorage.getUser().username;
            this.getJobs();
          }
      this.username = this.tokenStorage.getUser().username;
      this._getCard();
      
    }
  }

  

  public _deleteJob(id:any){
    this.customer.deleteJobById(id).subscribe(
      (response: void) => {
          console.log(response);
          this._getCard();
      },
      (error: HttpErrorResponse)=>{
       
      }
    );
    this.reloadPage();
}


onSubmit():void{
  const det={
    id:this.application.id,
    job_description:this.application.job_description,
    wage_per_day:this.application.wage_per_day,
    from_date:this.application.from_date,
    to_date:this.application.to_date,
    job_location:this.application.job_location,
    address:this.application.address,
    phone_number:this.application.phone_number,
    experience:this.application.experience,
    status:'pending',
  };
  this.customer.update(det,this.application.id).subscribe(
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
  this.router.navigate(['login'])
}


}
function det(det: any) {
  throw new Error('Function not implemented.');
}

