import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EquipementT } from '../model/equipement-t';
const baseUrl = 'http://localhost:8080/equipementType';
@Injectable({
  providedIn: 'root'
})
export class EquipementtService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<EquipementT[]> {
    return this.http.get<EquipementT[]>(baseUrl);
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
  findByTitle(title: any): Observable<EquipementT[]> {
    return this.http.get<EquipementT[]>(`${baseUrl}?title=${title}`);
  }
}
