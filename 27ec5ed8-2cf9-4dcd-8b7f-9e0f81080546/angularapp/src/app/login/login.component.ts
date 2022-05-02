import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  u?:string;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username= '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    
   }

   isUser= false;

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.username = this.tokenStorage.getUser().username;
      
    }

  }
  

  onSubmit(): void {

    const { username, password } = this.form;
    this.router.navigate(['../home'],{relativeTo:this.route});
    console.log(username);

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.roles = this.tokenStorage.getUser().roles;
        
          window.location.reload();
          
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}