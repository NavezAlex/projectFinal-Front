import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PanierItem } from '../models/panier-item';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panierItems: PanierItem[] = [];
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  alreadyExist: boolean = false;
  existingPanierItem : PanierItem | undefined ;
  //existingPanierItem : any;

  totalPriceValue: number = 0;
  totalQuantityValue: number = 0;

  constructor() { }

  addToPanier(panierItem : PanierItem ){

    console.log(this.panierItems);
   
    if(this.panierItems.length > 0){
      this.existingPanierItem = this.panierItems.find(tempItem => tempItem.id === panierItem.id );
      this.alreadyExist = (this.existingPanierItem != undefined);
    }

    if(this.alreadyExist){
      if (this.existingPanierItem)
        this.existingPanierItem.quantity++;
    }
    else{
      this.panierItems.push(panierItem);
    }

    this.calculeTotal();

  }

  calculeTotal(){

    this.totalPriceValue = 0;
    this.totalQuantityValue = 0;

    for(let tempItem of this.panierItems){
      this.totalPriceValue += tempItem.quantity * tempItem.prix;
      this.totalQuantityValue += tempItem.quantity;
    }

    this.totalPrice.next(this.totalPriceValue);
    this.totalQuantity.next(this.totalQuantityValue);
  }

  removeQuantity(panierItem : PanierItem){
    panierItem.quantity--;
    if(panierItem.quantity == 0){
      this.removePanierItem(panierItem);
    }else{
      this.calculeTotal();
    }
  }

  removePanierItem(panierItem : PanierItem){
    const itemIndex = this.panierItems.findIndex(tempItem => tempItem.id == panierItem.id);
    if(itemIndex > -1){
      this.panierItems.splice(itemIndex, 1);
      this.calculeTotal();
    }
  }

}
