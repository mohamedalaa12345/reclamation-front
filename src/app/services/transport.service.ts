import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transport } from '../model/trasport';


const baseUrl = 'http://localhost:8080/meansOfTransport';
@Injectable({
  providedIn: 'root'
})
export class TransportService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Transport[]> {
    return this.http.get<Transport[]>(baseUrl);
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
  findByTitle(title: any): Observable<Transport[]> {
    return this.http.get<Transport[]>(`${baseUrl}?title=${title}`);
  }
}

  