import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Categorie } from 'src/app/models/categorie';
import { ArticleService } from 'src/app/services/article.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-article-add',
  templateUrl: './admin-article-add.component.html',
  styleUrls: ['./admin-article-add.component.scss']
})
export class AdminArticleAddComponent implements OnInit {

  articleFormGroup = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(2)]),
    description : new FormControl('', [Validators.required, Validators.minLength(2)]),
    prix : new FormControl('', [Validators.required]),
    stock : new FormControl('', [Validators.required, Validators.minLength(1)]),
    picture : new FormControl(''),
    categorie : new FormControl('', [Validators.required]),
    fournisseur : new FormControl('')
  });

  productCategory: Categorie[] = [];

  constructor(private client : HttpClient, private formBuilder: FormBuilder, private router : Router) {}


  ngOnInit(): void {
    this.loadData();
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

  SaveArticle(){

    console.log(this.articleFormGroup.value);

    if(this.articleFormGroup.valid){
      console.log("pass valid");

      this.client.post<Article>(environment.apiUrl+'/article/add', this.articleFormGroup.value)
        .subscribe({
          next: data => {
            console.log(data);
            console.log('Enregistrement OK');
          }, error: error => {
            console.log(error);
          }
        });
    }
    else{
      console.log(this.articleFormGroup.errors);
    }

    if(!this.articleFormGroup.errors){
      this.router.navigate(['/list-article']);
    }

  }

}
