import { Categorie } from "./categorie";

export class Article {
    id! : number;
    name! : string;
    description! : string;
    prix! : number;
    actif! : boolean;
    stock! : number;
    pictureUrl! : string;
    categorie! : Categorie;
    fournisseur! : number;
}