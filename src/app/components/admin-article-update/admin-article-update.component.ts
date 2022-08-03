import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Categorie } from 'src/app/models/categorie';
import { ArticleService } from 'src/app/services/article.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-article-update',
  templateUrl: './admin-article-update.component.html',
  styleUrls: ['./admin-article-update.component.scss']
})
export class AdminArticleUpdateComponent implements OnInit {

  articleFormGroup = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(2)]),
    description : new FormControl('', [Validators.required, Validators.minLength(2)]),
    prix : new FormControl('', [Validators.required]),
    stock : new FormControl('', [Validators.required, Validators.minLength(1)]),
    picture : new FormControl(''),
    actif : new FormControl('', [Validators.required]),
    categorie : new FormControl('', [Validators.required]),
    fournisseur : new FormControl('')
  });

  idArticle : number = 0;
  responseData : any;
  isActif : boolean | undefined;

  productCategory: Categorie[] = [];

  constructor(private client : HttpClient, private formBuilder: FormBuilder, private articleService : ArticleService, private router : Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idArticle = parseInt(this.route.snapshot.params['id']);
    this.loadData();
    this.UpdateArticle(this.idArticle);
  }

  private loadData(){
      this.client.get<Categorie[]>(environment.apiUrl + '/categorie/list' )
      .subscribe({
        next: data => { 
          this.productCategory = data;
        }, 
        error: error => { 
          console.log(error);
          console.log("erreur de connexion");
         }, 
        complete: () => {}  
      });
  }

  UpdateArticle(id : number){
    console.log(id);
    this.client.get<Article>(environment.apiUrl + '/article/' + id )
      .subscribe({
        next: data => { 
          console.log(data);
          this.isActif = data.actif;
          this.articleFormGroup = new FormGroup({
            name : new FormControl(data.name),
            description : new FormControl(data.description),
            prix : new FormControl(data.prix),
            stock : new FormControl(data.stock),
            picture : new FormControl(data.pictureUrl),
            actif : new FormControl(data.actif),
            categorie : new FormControl(data.categorie.id),
            fournisseur : new FormControl('')
          });
        }, 
        error: error => { 
          console.log(error);
          console.log("erreur de connexion");
         }, 
        complete: () => {}  
      });
  }

  SaveArticle(){
    if(this.articleFormGroup.valid){

      console.log( this.articleFormGroup.value);
      
      this.articleService.updateArticle(this.idArticle, this.articleFormGroup.value)
        .subscribe({ next: data => {
          console.log(data);
            console.log('Update OK');
          }, error: error => {
            console.log(error);
          }
        });
    }
    this.router.navigate(['/list-article']);
  }
  
}
