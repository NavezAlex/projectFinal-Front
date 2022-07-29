import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }

  loadClient(){
    return this.http.get(environment.apiUrl + '/client/all');
  }

  loadClientById(id : number){
    return this.http.get(environment.apiUrl + '/id/' + id);
  }

  loadClientByName(name : string) : Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/client/name/' + name);
  }

  saveClient(clientData : User){
    return this.http.post(environment.apiUrl+'/client/register', clientData)
  }

  updateClient(id : number, clientUpdate : User){
    return this.http.put(environment.apiUrl+'/client/update/'+id, clientUpdate);
  }


}
