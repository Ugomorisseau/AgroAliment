import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../models/user";

interface LoginResponse{
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  protected baseUrl = 'https://localhost:44363/api';
  protected componentUrl = this.baseUrl + '/User';

  constructor(
    protected router: Router,
    protected http: HttpClient
  ) { }

  login(email: string, password: string): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const loginModel = JSON.stringify({ email: email, password: password });
    this.http.post(this.componentUrl + '/Login', loginModel, {headers, observe: 'response' }).subscribe((token: any) => {
      sessionStorage.setItem('token', token.data);
      this.router.navigate(['/home']);
      // Rediriger l'utilisateur vers la page d'accueil ou la page suivante
    }, error => {
      console.error(error);
    });
  }
}
