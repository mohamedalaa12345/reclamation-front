import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private httpClient: HttpClient, private auth: AuthenticationService) { }
  getAllDepot() {
    const headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt });
    return this.httpClient.get(this.auth.host + '/district', { headers: headers });
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
