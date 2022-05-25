import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RapportService {

  constructor(private httpClient: HttpClient, private auth: AuthenticationService) { }
  getAllRapport() {
    const headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt });
    return this.httpClient.get(this.auth.host + '/rapport', { headers: headers });
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
