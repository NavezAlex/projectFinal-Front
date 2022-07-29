import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged : boolean = false;

  constructor(private http: HttpClient) { }


  proceedLogin(user:any){
    return this.http.post(environment.apiUrl+'/login', user);
  }

  isLoggedIn(){
    //console.log("Logged In");
    return this.logged = sessionStorage.getItem('token') != null;
  }

  isLoggedOut(){
    sessionStorage.clear();
    this.logged = false;
    //console.log("Logged Out");
    return false;
  }

}
