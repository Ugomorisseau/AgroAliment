import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {AuthentificationService} from "./authentification.service";
import {map, Observable} from "rxjs";
import {User} from "../models/user";
import {UserService} from "./user.service";
import {Service} from "../models/service";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  protected baseUrl = 'https://localhost:44363/api';
  protected componentUrl = this.baseUrl + '/Service';

  registerService!: Service | null;

  constructor(
    protected router: Router,
    protected http: HttpClient,
    private authService: AuthentificationService,
    private userService: UserService
  ) { }

  getData(): Promise<any> {
    return fetch(this.componentUrl + '/GetServices')
      .then(response => response.json())
  }

  Search(searchValue: string): Observable<any> {
    const params: HttpParams = new HttpParams();
    return this.http.get(this.componentUrl + '/search/' + searchValue, {params});
  }

  public addService(nom: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.userService.getAuthorizationHeader()
    });
    const registerData = {
      nom: nom
    }

    return this.http.post(this.componentUrl + '/AddService', registerData, {headers, observe: 'response'}).pipe(
      map((response: HttpResponse<Service>) => {
        if (response.status !== 200 || !response.ok) {
          return false;
        }
        const responseService: Service | null = response.body;
        this.registerService = responseService;

        return true;
      })
    );
  }
}
