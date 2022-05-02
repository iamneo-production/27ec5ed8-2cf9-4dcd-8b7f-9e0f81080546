import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerApplication } from '../models/customer-application.model';
import { Jobseeker } from '../models/jobseeker.model';
import { CustomerApplicationService } from '../_services/customer-application.service';
import { JobseekerService } from '../_services/jobseeker.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-applied-candidates',
  templateUrl: './applied-candidates.component.html',
  styleUrls: ['./applied-candidates.component.css']
})
export class AppliedCandidatesComponent implements OnInit {

  application1!: CustomerApplication[];




  constructor(private jobseeker:JobseekerService,
    private customer:CustomerApplicationService,
    private route:ActivatedRoute,
    private router:Router,
    private tokenStorage:TokenStorageService
    ) { }


    onapply(id:any){
      console.log(id)
    }

    // onclickpending(){
    //   if(this.route.snapshot.params['id']=='accepted'){
    //     this.router.navigate(['../'],{relativeTo:this.route});
    //    }
    //    else if(this.route.snapshot.params['id']=='rejected'){
    //     this.router.navigate(['../'],{relativeTo:this.route});
    //    }
  
    // }

  ngOnInit(): void {
    this.customer.getAllById().subscribe(
      response=>{
        if(response){
          this.application1=response;
          console.log(response)

        }
        
      }
    )

  }

}
function det(det: any) {
  throw new Error('Function not implemented.');
}

