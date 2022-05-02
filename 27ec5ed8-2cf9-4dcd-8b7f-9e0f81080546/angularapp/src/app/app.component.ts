import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './_services/auth.service';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Nanny-Hiring';
  isLoggedin =false;
  isCustomer = false;
  isEmployee=false;
  isAdmin=false;

  constructor(private tokenStrorageService:TokenStorageService,
    private auth:AuthService,
    private route:Router
    ){}

  ngOnInit ():void{
    this.isLoggedin = !!this.tokenStrorageService.getToken()
    if(this.tokenStrorageService.getUser().roles[0] == "ROLE_EMPLOYEE"){
      this.isEmployee=true
      this.route.navigate(['jobdetails']);
    }
    if(this.tokenStrorageService.getUser().roles[0] == "ROLE_CUSTOMER"){
      this.isCustomer = true
    }else(this.tokenStrorageService.getUser().roles[0] == "ROLE_ADMIN");{
      this.isAdmin=true
      this.route.navigate(['admin'])
    }
    
  }
  
  
  logout():void{
    this.tokenStrorageService.signOut()
    this.isLoggedin=false;
    window.location.reload
    this.route.navigate(['login'])
  }

}