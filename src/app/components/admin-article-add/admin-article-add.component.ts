import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

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
    actif : new FormControl('', [Validators.required]),
    stock : new FormControl('', [Validators.required, Validators.minLength(1)]),
    pictureUrl : new FormControl('', [Validators.required]),
    categorie : new FormControl('', [Validators.required])
  });

  constructor(private formBuilder: FormBuilder, private router : Router, private articleService : ArticleService) {}


  ngOnInit(): void {
  }

  SaveArticle(){

  }

}
