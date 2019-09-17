import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class RequestService {

  public url: string;

  constructor(
    // Inyección de servicio
    public http: HttpClient
  ) {
    this.url = 'https://api.github.com/users';
  }

  // Devuelvo observable para luego susbcribirme a él
  getUsers(): Observable<any> {
    return this.http.get(this.url, {observe: 'response'});
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  post(json): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', json);
  }

}
