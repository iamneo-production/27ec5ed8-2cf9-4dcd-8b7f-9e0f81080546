import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor, authInterceptorProviders } from './_helpers/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerApplicationComponent } from './customer-application/customer-application.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { AppliedjobsComponent } from './appliedjobs/appliedjobs.component';
import { AppliedCandidatesComponent } from './applied-candidates/applied-candidates.component';
import { AdminComponent } from './admin/admin.component';
import { ApplicationsComponent } from './applications/applications.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CustomerApplicationComponent,
    JobdetailsComponent,
    HomeComponent,
    AppliedjobsComponent,
    AppliedCandidatesComponent,
    AdminComponent,
    ApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

