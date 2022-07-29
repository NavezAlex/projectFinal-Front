import { Article } from "./article";
export class PanierItem {
    id : number;
    name : string;
    prix : number;
    pictureUrl : string;
    quantity : number;

    constructor(article : Article){
        this.id = article.id;
        this.name = article.name;
        this.prix = article.prix;
        this.pictureUrl = article.pictureUrl;
        this.quantity = 1
    }
}