import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Source } from '../model/source';
const baseUrl = 'http://localhost:8080/sourceInfo';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Source[]> {
    return this.http.get<Source[]>(baseUrl);
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
  findByTitle(title: any): Observable<Source[]> {
    return this.http.get<Source[]>(`${baseUrl}?title=${title}`);
  }
}
