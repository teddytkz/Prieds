import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  /** Send To Api */
  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  /** Get To Api */
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getById(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  /** Update To Api */
  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  /** Delete To Api */
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  deleteById(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
