import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthentificationService} from "./authentification.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  protected baseUrl = 'https://localhost:44363/api';
  protected componentUrl = this.baseUrl + '/Service';

  constructor(
    protected router: Router,
    protected http: HttpClient,
    private authService: AuthentificationService
  ) { }

  getData(): Promise<any> {
    return fetch(this.componentUrl + '/GetServices')
      .then(response => response.json())
  }

  Search(searchValue: string): Observable<any> {
    const params: HttpParams = new HttpParams();
    return this.http.get(this.componentUrl + '/search/' + searchValue, {params});
  }
}
