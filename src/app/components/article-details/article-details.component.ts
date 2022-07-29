import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { PanierItem } from 'src/app/models/panier-item';
import { PanierService } from 'src/app/services/panier.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  product: Article = new Article();


  constructor( private route: ActivatedRoute, private client : HttpClient, private panierService : PanierService ) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData(){
    this.client.get<Article>(environment.apiUrl + '/article/' + this.route.snapshot.paramMap.get('id') )
      .subscribe({
        next: data => { 
          console.log(data);
          this.product = data;
        }, 
        error: error => { 
          console.log(error);
          console.log("erreur de connexion");
         }, 
        complete: () => {}  
      });
  }

  addToPanier(){
    const panierItem = new PanierItem(this.product);
    console.log(this.product);
    this.panierService.addToPanier(panierItem);
  }

}
