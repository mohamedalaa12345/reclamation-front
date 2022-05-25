import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement } from '../model/equipement';
const baseUrl = 'http://localhost:8080/safetyEquipement';
@Injectable({
  providedIn: 'root'
})
export class EquipementService {


  constructor(private http: HttpClient) { }
  getAll(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(baseUrl);
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
  findByTitle(title: any): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${baseUrl}?title=${title}`);
  }
}
  

