import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerApplicationComponent } from './customer-application/customer-application.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { AppliedjobsComponent } from './appliedjobs/appliedjobs.component';
import { AppliedCandidatesComponent } from './applied-candidates/applied-candidates.component';
import { RoleGuardService } from './_services/role-guard.service';
import { AdminComponent } from './admin/admin.component';
import { ApplicationsComponent } from './applications/applications.component';


const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent,canActivate:[RoleGuardService,AuthGuardService],data:{expectedRole:['ROLE_CUSTOMER','ROLE_ADMIN']}},
  {path:'customerapplication',component:CustomerApplicationComponent,canActivate:[RoleGuardService,AuthGuardService],data:{expectedRole:['ROLE_CUSTOMER','ROLE_ADMIN']}},
  {path:'appliedcandidates',component:AppliedCandidatesComponent,canActivate:[RoleGuardService,AuthGuardService],data:{expectedRole:['ROLE_CUSTOMER']}},
  {path:'appliedcandidates/applications/:id',component:ApplicationsComponent,canActivate:[RoleGuardService,AuthGuardService],data:{expectedRole:['ROLE_CUSTOMER']}},
  {path:'jobdetails',component:JobdetailsComponent,canActivate:[RoleGuardService,AuthGuardService],data:{expectedRole:['ROLE_EMPLOYEE','ROLE_ADMIN']}},
  {path:'appliedjobs',component:AppliedjobsComponent,canActivate:[RoleGuardService,AuthGuardService],data:{expectedRole:['ROLE_EMPLOYEE','ROLE_ADMIN']}},
  {path:'admin',component:AdminComponent,canActivate:[RoleGuardService,AuthGuardService],data:{expectedRole:['ROLE_ADMIN']}}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
