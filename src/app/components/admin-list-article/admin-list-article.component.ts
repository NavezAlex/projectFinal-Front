import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-list-article',
  templateUrl: './admin-list-article.component.html',
  styleUrls: ['./admin-list-article.component.scss']
})
export class AdminListArticleComponent implements OnInit {

  products: Article[] = [];

  constructor( private route: ActivatedRoute, private client : HttpClient ) { }

  ngOnInit() {
    console.log("passe dans Init");
    this.loadData();
  }

  loadData(){
    this.client.get<Article[]>(environment.apiUrl + '/article/all' )
      .subscribe({
        next: data => { 
          //console.log(data);
          this.products = data;
        }, 
        error: error => { 
          console.log(error);
          console.log("erreur de connexion");
         }, 
        complete: () => {}  
      });
  }

}
