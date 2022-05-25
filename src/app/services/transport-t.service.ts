import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransportT } from '../model/trasport-t';
const baseUrl = 'http://localhost:8080/meansOfTransportType';
@Injectable({
  providedIn: 'root'
})
export class TransportTService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<TransportT[]> {
    return this.http.get<TransportT[]>(baseUrl);
  }
  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  
}
