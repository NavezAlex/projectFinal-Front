import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  editData : any;
  responseData : any;

  constructor(private route: Router,  private authService : AuthService ) { }

  Login = new FormGroup({
    username : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required)
  });

  ngOnInit(): void {
  }

  ProceedLogin(){
    console.log(this.Login.get("password"));
    if(this.Login.valid){
      this.authService.proceedLogin(this.Login.value)
      .subscribe(result =>{
        if(result != null){
          this.responseData = result;
          sessionStorage.setItem('token', this.responseData.jwtToken);
          sessionStorage.setItem('username', this.responseData.username);

          this.route.navigate(['/perso']);
        }
      },
      error => {
        console.log(error);
      })
    }
    
  }

}
