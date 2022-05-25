import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LigneService {

  constructor(private httpClient: HttpClient, private auth: AuthenticationService) {
    try{
      this.auth.loadToken();
    }catch(ex)
    {

    }
   }
  getAllLigne() {
    const headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt });
    return this.httpClient.get(this.auth.host + '/lignes', { headers: headers });
  }

  getAllRessources(path) {
    const headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt });
    return this.httpClient.get(this.auth.host + path, { headers: headers });
  }

  public postRessource(path, data) {
    const headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt });
    return this.httpClient.post(this.auth.host+path, data, { headers: headers });
  }
  public deleteRessource(url) {
    let headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt });
    return this.httpClient.delete(url, { headers: headers });
  }
}
