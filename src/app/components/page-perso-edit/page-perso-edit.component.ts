import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-page-perso-edit',
  templateUrl: './page-perso-edit.component.html',
  styleUrls: ['./page-perso-edit.component.scss']
})
export class PagePersoEditComponent implements OnInit {

  persoFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    dateNaissance: new FormControl(''),
    phone: new FormControl('')
  });

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  clientData : Observable<User> | undefined;
  userName : string = '';
  idClient : number = 0;
  responseData : any;

  constructor(private formBuilder: FormBuilder, private router : Router , private route: ActivatedRoute, private clientService : ClientService) {}

  ngOnInit(): void {
    const optionRequete = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      })
    };

    this.userName = this.route.snapshot.paramMap.get('username') || '';
    this.UpdateClient(this.userName);
  }

  UpdateClient(username : string){
    this.clientService.loadClientByName(username)
      .subscribe(
        data => {
          this.idClient = data.id;
          this.persoFormGroup = new FormGroup({
            firstName: new FormControl(data.firstName),
            lastName: new FormControl(data.lastName),
            email: new FormControl(data.email),
            dateNaissance: new FormControl(data.dateNaissance),
            phone: new FormControl(data.phone),
        });
      }
    );
  }

  SaveClient(){
    const optionRequete = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      })
    };

    if(this.persoFormGroup.valid){
      console.log(this.idClient);
      console.log( this.persoFormGroup.value);
      this.clientService.updateClient(this.idClient, this.persoFormGroup.value)
        .subscribe({ next: data => {
            console.log('Update OK');
            this.router.navigate(['/perso']);
          }, error: error => {
            console.log(error);
          }
        });
    }
  }

}
