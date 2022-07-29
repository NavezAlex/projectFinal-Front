import { Component, OnInit } from '@angular/core';
import { PanierItem } from 'src/app/models/panier-item';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier-details',
  templateUrl: './panier-details.component.html',
  styleUrls: ['./panier-details.component.scss']
})
export class PanierDetailsComponent implements OnInit {

  panierItems : PanierItem[] = [];
  totalPrice : number = 0;
  totalQuantity : number = 0;

  constructor(private panierService : PanierService) { }

  ngOnInit(): void {
    this.listPanierDetails();
  }

  listPanierDetails(){
    this.panierItems = this.panierService.panierItems;

    this.panierService.totalPrice.subscribe( data => this.totalPrice = data );
    this.panierService.totalQuantity.subscribe( data => this.totalQuantity = data );

    this.panierService.calculeTotal();
  }

  increaseQuantity(panierItem : PanierItem){
    this.panierService.addToPanier(panierItem);
  }
  removeQuantity(panierItem : PanierItem){
    this.panierService.removeQuantity(panierItem);
  }

  removePanierItem(panierItem : PanierItem){
    this.panierService.removePanierItem(panierItem);
  }

}
