import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { PanierService } from 'src/app/services/panier.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product1: Article = new Article();
  product2: Article = new Article();
  product3: Article = new Article();


  constructor( private route: ActivatedRoute, private client : HttpClient, private panierService : PanierService ) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData(){
    this.client.get<Article>(environment.apiUrl + '/article/14' )
      .subscribe({
        next: data => {
          console.log(data);
          this.product1 = data;
        },
        complete: () => {}  
      });
      this.client.get<Article>(environment.apiUrl + '/article/15' )
      .subscribe({
        next: data => { 
          this.product2 = data;
        },
        complete: () => {}  
      });
      this.client.get<Article>(environment.apiUrl + '/article/17' )
      .subscribe({
        next: data => { 
          this.product3 = data;
        },
        complete: () => {}  
      });
  }

}
