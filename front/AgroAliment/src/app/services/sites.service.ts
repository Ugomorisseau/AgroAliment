import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthentificationService} from "./authentification.service";
import {Service} from "../models/service";
import {UserService} from "./user.service";
import {Site} from "../models/site";

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  protected baseUrl = 'https://localhost:44363/api';
  protected componentUrl = this.baseUrl + '/Site';

  registerSite!: Site | null;

  constructor(
    protected router: Router,
    protected http: HttpClient,
    private authService: AuthentificationService,
    private userService: UserService
  ) { }

  getData(): Promise<any> {
    return fetch(this.componentUrl + '/GetSites')
      .then(response => response.json())
  }

  Search(searchValue: string): Observable<any> {
    const params: HttpParams = new HttpParams();
    return this.http.get(this.componentUrl + '/search/' + searchValue, {params});
  }

  public addSite(ville: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.userService.getAuthorizationHeader()
    });
    const registerData = {
      ville: ville
    }

    return this.http.post(this.componentUrl + '/AddSite', registerData, {headers, observe: 'response'}).pipe(
      map((response: HttpResponse<Site>) => {
        if (response.status !== 200 || !response.ok) {
          return false;
        }
        const responseSite: Site | null = response.body;
        this.registerSite = responseSite;

        return true;
      })
    );
  }
}
