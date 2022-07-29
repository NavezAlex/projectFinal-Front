import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { PanierService } from 'src/app/services/panier.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  productCategory: Categorie[] = [];
  totalQuantity: number = 0;

  isAuthenticated(): boolean {
    if(sessionStorage.getItem('username')){
      return true;
    }
    else{
      return false;
    }
  }

  constructor(private route: ActivatedRoute, private client : HttpClient, private panierService : PanierService) { }

  ngOnInit(): void {
    this.loadData();
    this.updateStatus();
  }

  private loadData(){

      this.client.get<Categorie[]>(environment.apiUrl + '/categorie/list' )
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

  updateStatus(){
    this.panierService.totalQuantity.subscribe(
      data => { this.totalQuantity = data }
    );
  }

}
