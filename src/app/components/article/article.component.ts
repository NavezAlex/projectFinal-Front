import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table/table-data-source';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { PanierItem } from 'src/app/models/panier-item';
import { ArticleService } from 'src/app/services/article.service';
import { PanierService } from 'src/app/services/panier.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  products: Article[] = [];


  constructor( private route: ActivatedRoute, private client : HttpClient, private panierService : PanierService ) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData(){

    if(this.route.snapshot.paramMap.get('idCat')){
      this.client.get<Article[]>(environment.apiUrl + '/article/categorie/'+ this.route.snapshot.paramMap.get('idCat') )
      .subscribe({
        next: data => { 
          console.log(data);
          this.products = data;
        }, 
        error: error => { 
          console.log(error);
          console.log("erreur de connexion");
         }, 
        complete: () => {}  
      });
    }

    else{
      this.client.get<Article[]>(environment.apiUrl + '/article/list' )
      .subscribe({
        next: data => { 
          console.log(data);
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

  addToPanier(article : Article){
    const panierItem = new PanierItem(article);
    console.log(article);
    this.panierService.addToPanier(panierItem);
  }


}
