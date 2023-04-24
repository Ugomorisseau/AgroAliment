import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  protected baseUrl = 'https://localhost:44363/api';
  protected componentUrl = this.baseUrl + '/User';

  users: User[] = [];
  currentUser!: User | null;
  registerUser!: User | null;

  constructor(
    protected router: Router,
    protected http: HttpClient
  ) { }

  loginWeb(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const loginData = {
      email: email,
      password: password
    }
    return this.http.post(this.componentUrl + "/WebLogin", loginData, {headers, observe: 'response'}).pipe(
      map((response: HttpResponse<User>) => {
        if (response.status !== 200 || !response.ok) {
          return false;
        }
        const responseUser: User | null = response.body;
        console.log('prenom', responseUser, email);
        if (responseUser?.email === email) {
          this.currentUser = responseUser;
          sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));

          return true;
        } else {
          return false;
        }
      })
    );
  }
}
