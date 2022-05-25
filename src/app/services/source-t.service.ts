import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SourceT } from '../model/source-t';
const baseUrl = 'http://localhost:8080/sourceInfoType';
@Injectable({
  providedIn: 'root'
})
export class SourceTService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<SourceT[]> {
    return this.http.get<SourceT[]>(baseUrl);
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
  findByTitle(title: any): Observable<SourceT[]> {
    return this.http.get<SourceT[]>(`${baseUrl}?title=${title}`);
  }
}
