import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  persoFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(2)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    dateNaissance: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private router : Router, private clientService : ClientService) {}


  ngOnInit(): void {
  }

  SaveClient(){
    const optionRequete = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      })
    };

    if(this.persoFormGroup.valid){
      this.clientService.saveClient(this.persoFormGroup.value)
        .subscribe({ next: data => {
            console.log('Enregistrement OK');
          }, error: error => {
            console.log(error);
          }
        });
      this.router.navigate(['/login']);
    }
    else{
      console.log(this.persoFormGroup.errors);
    }
  }


}
