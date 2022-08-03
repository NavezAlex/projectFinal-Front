import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtService {

  id : number = 1;
  catChange: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor(private route : ActivatedRoute, private client : HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['idCat'];
  }
}
