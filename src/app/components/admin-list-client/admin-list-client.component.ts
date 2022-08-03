import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-admin-list-client',
  templateUrl: './admin-list-client.component.html',
  styleUrls: ['./admin-list-client.component.scss']
})
export class AdminListClientComponent implements OnInit {

  clients : any;

  constructor(private route: ActivatedRoute, private client : HttpClient, private clientService : ClientService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.clientService.loadClient()
    .subscribe({
      next: data => { 
        console.log(data);
        this.clients = data;
      }, 
      error: error => { 
        console.log(error);
        console.log("erreur de connexion");
       }, 
      complete: () => {}  
    });



  }

}
