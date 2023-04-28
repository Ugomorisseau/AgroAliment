import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthentificationService} from "./authentification.service";

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  protected baseUrl = 'https://localhost:44363/api';
  protected componentUrl = this.baseUrl + '/Site';

  constructor(
    protected router: Router,
    protected http: HttpClient,
    private authService: AuthentificationService
  ) { }

  getData(): Promise<any> {
    return fetch(this.componentUrl + '/GetSites')
      .then(response => response.json())
  }

  Search(searchValue: string): Observable<any> {
    const params: HttpParams = new HttpParams();
    return this.http.get(this.componentUrl + '/search/' + searchValue, {params});
  }
}
