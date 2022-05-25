import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  public jwt: string;
  private etat: Array<string>;
  constructor(private httpClient: HttpClient, private auth: AuthenticationService ) {
    try {
      this.loadToken();
    } catch (error) {
      console.log(error);
    }
   }
  
  isActive(){
    
    this.etat.indexOf('Etat') >= 0
  }
  loadToken() {
    this.jwt = localStorage.getItem('token');
   
  }
  
  getAllUser() {
    const headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt });
    return this.httpClient.get(this.auth.host + '/Users', { headers: headers });
  }

  getAllRessources(path) {
    const headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt });
    return this.httpClient.get(this.auth.host + path, { headers: headers });
  }

  public postRessource(path, data) {
    const headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt });
    return this.httpClient.post(this.auth.host+path, data, { headers: headers });
  }
}
