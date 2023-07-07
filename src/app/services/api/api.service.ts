import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://localhost:3000'
  constructor(private http: HttpClient) {}

  public get(endpoint: string): Observable<any> {
    return this.http.get<any>(`${this.url}${endpoint}`);
  }

  public post(endpoint: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.url}${endpoint}`, data);
  }

  public patch(endpoint: string, data: any): Observable<any> {
    return this.http.patch<any>(`${this.url}${endpoint}`, data);
  }

  public delete(endpoint: string): Observable<any> {
    return this.http.delete<any>(`${this.url}${endpoint}`);
  }
}
