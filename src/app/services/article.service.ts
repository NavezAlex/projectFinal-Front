import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  updateArticle(id : number, articleUpdate : Article){
    return this.http.put(environment.apiUrl+'/article/edit/'+id, articleUpdate);
  }

}