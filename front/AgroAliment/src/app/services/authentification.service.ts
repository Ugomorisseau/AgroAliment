import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {Data, User, UserViewModel} from "../models/user";

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  protected baseUrl = 'https://localhost:44363/api';
  protected componentUrl = this.baseUrl + '/User';

  currentUser!: UserViewModel;

  data!: Data;


  constructor(
    protected router: Router,
    protected http: HttpClient
  ) {
  }

  login(email: string, password: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const loginModel = JSON.stringify({email: email, password: password});
    return this.http.post(this.componentUrl + '/Login', loginModel, {headers, observe: 'response'});
    // .subscribe((token: any) => {
    //   // console.log(token.data, 'tokenDATA');
    //   // token.data = token.data.replace(/"/g, '');
    //   sessionStorage.setItem('token', token.replace(/"/g, ''));
    //   this.router.navigate(['/home']);
      // Rediriger l'utilisateur vers la page d'accueil ou la page suivante
    // }, error => {
    //   console.error(error);
    // });
  }

  loginWeb(email: string, password: string): any {
    const loginModel = {email: email, password: password};
    this.http.post(this.componentUrl + '/WebLogin', loginModel)
      .subscribe(
        response => {
          if (response == null) {
            console.log('Invalid credentials');
          } else {
            const responseUser: UserViewModel = response;
            if (responseUser?.email === email) {
              this.currentUser = responseUser;
              sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
              sessionStorage.setItem('LastConnectionDate', JSON.stringify(new Date));
            }
          }
          console.log(response);
        });
  }

  public GetToken() {
    let data = sessionStorage.getItem('token');
    if (data){
      this.data = JSON.parse(data);
      return this.data.data;
    }
    return null;
  }

  public User(): UserViewModel {
    console.log(this.currentUser, 'utilisateur en cours');
    return this.currentUser;
  }
}

