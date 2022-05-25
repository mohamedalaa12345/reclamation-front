import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from '../model/reclamation';


const baseUrl = 'http://localhost:8080/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {


  constructor(private http: HttpClient) { }
  getAll(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(baseUrl);
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
  findByTitle(title: any): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${baseUrl}?title=${title}`);
  }
}
  
