import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerApplication } from '../models/customer-application.model';
import { AuthService } from '../_services/auth.service';
import { CustomerApplicationService } from '../_services/customer-application.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-customer-application',
  templateUrl: './customer-application.component.html',
  styleUrls: ['./customer-application.component.css']
})
export class CustomerApplicationComponent implements OnInit {

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

  isLoggedIn = false;
  isLoginFailed=false;
  errorMessage = '';
  roles: string[] = [];
  username= '';

  constructor(
    private customer:CustomerApplicationService,
    private tokenStorage: TokenStorageService,
    private router:Router,
    private route:ActivatedRoute,
    private authservice:AuthService


  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.username = this.tokenStorage.getUser().username;
      
    }
    // this.authservice.isLoggedIn(this.tokenStorage.getUser().username).subscribe(
    //   data=>{
    //     this.isLoggedIn;
    //     console.log(this.isLoggedIn)
    //   }
    // )
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
    this.customer.post(det).subscribe(
      response=>{
        if(response){
          this.customer.hasApplied=true;
          this.router.navigate(['../home'],{relativeTo:this.route});

        }
        console.log(response);
      }
    )
  }

  reloadPage(): void {
    window.location.reload();
  }

}
