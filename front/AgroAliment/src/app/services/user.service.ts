import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected baseUrl = 'https://localhost:44363/api';
  protected componentUrl = this.baseUrl + '/User';

  constructor(
    protected router: Router,
    protected http: HttpClient
  ) {
  }

  getData(): Promise<any> {
    return fetch(this.componentUrl + '/GetUsers')
      .then(response => response.json())
      }
  }

  // getUsers(): Observable<any>{
  //   return this.http.get(this.componentUrl + '/GetUsers')
  // }

