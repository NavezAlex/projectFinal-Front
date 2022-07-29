import { PanierItem } from "./panier-item";
export class CommandeItem {
    pictureUrl: string;
    prix: number;
    quantity: number;
    articleId: number;

    constructor(panierItem : PanierItem){
        this.pictureUrl = panierItem.pictureUrl;
        this.prix = panierItem.prix;
        this.quantity = panierItem.quantity;
        this.articleId = panierItem.id
    }

}