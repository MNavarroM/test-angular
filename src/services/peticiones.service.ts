import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class PeticionesService {

  public url: string;

  constructor(
    public http: HttpClient

  ) {
    this.url = 'https://reqres.in/';
  }

  public getUsers(id: any): Observable<any> {
    return this.http.get(this.url + 'api/users/' + id);
  }

}
