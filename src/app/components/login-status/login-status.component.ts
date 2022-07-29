import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.scss']
})
export class LoginStatusComponent implements OnInit {

  userName : string = '';
  
  isAuthenticated(): boolean {
    this.userName = sessionStorage.getItem('username') || '';
    return this.authService.isLoggedIn();
  }

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.isLoggedOut();
    this.route.navigate(['/home']);
  }

}
