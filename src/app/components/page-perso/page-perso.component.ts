import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-page-perso',
  templateUrl: './page-perso.component.html',
  styleUrls: ['./page-perso.component.scss']
})
export class PagePersoComponent implements OnInit {

  clientData : Observable<User> | undefined;
  userName : string = '';
  isAdmin : boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private clientService : ClientService) { }

  ngOnInit(): void {
    console.log("on passe");
    this.loadClient();
  }

  loadClient(){

    this.userName = sessionStorage.getItem('username') || '';
    if(this.userName == 'Admin'){
      this.isAdmin = true;
    }

    if(this.userName){
      this.clientService.loadClientByName(this.userName)
          .subscribe(
            m => console.log(m)
          )
      this.clientData = this.clientService.loadClientByName(this.userName);
    }
  }

}
