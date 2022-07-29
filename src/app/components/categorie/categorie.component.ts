import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  productCategory: Categorie[] = [];

  constructor(private route: ActivatedRoute, private client : HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(){

      this.client.get<Categorie[]>(environment.apiUrl + '/categorie/all' )
      .subscribe({
        next: data => { 
          console.log(data);
          this.productCategory = data;
        }, 
        error: error => { 
          console.log(error);
          console.log("erreur de connexion");
         }, 
        complete: () => {}  
      });

  }

}
