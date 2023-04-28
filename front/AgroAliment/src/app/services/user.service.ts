import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthentificationService} from "./authentification.service";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected baseUrl = 'https://localhost:44363/api';
  protected componentUrl = this.baseUrl + '/User';

  registerUser!: User | null;

  constructor(
    protected router: Router,
    protected http: HttpClient,
    private authService: AuthentificationService
  ) {
  }

  getData(): Promise<any> {
    return fetch(this.componentUrl + '/GetUsers')
      .then(response => response.json())
  }

  deleteUser(userId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getAuthorizationHeader()
    });
    console.log(this.getAuthorizationHeader());
    return this.http.delete(this.componentUrl + `/${userId}`, {headers});
  }

  private getAuthorizationHeader() {
    const token = this.authService.GetToken();
    console.log(this.authService.GetToken());
    return token?.replace(/"/g, '') ? `Bearer ${token}` : '';
  }

  Search(searchValue: string): Observable<any> {
    const params: HttpParams = new HttpParams();
    return this.http.get(this.componentUrl + '/search/' + searchValue, {params});
  }

  public addUser(nom: string, prenom: string, phone: string, phoneFix: string, email: string, password: string,
                 serviceId: number, siteId: number, roleId: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const registerData = {
      nom: nom,
      prenom: prenom,
      phone: phone,
      phoneFix: phoneFix,
      email: email,
      password: password,
      serviceId: serviceId,
      siteId: siteId,
      roleId: roleId
    }

    return this.http.post(this.componentUrl + '/AddUser', registerData, {headers, observe: 'response'}).pipe(
      map((response: HttpResponse<User>) => {
        if (response.status !== 200 || !response.ok) {
          return false;
        }
        const responseUser: User | null = response.body;
        console.log('username', responseUser, email);
        this.registerUser = responseUser;

        return true;
      })
    );
  }

  getUserById(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.componentUrl + '/' + id, {headers});
  }

  modifyUser(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Authorization': this.getAuthorizationHeader()
    });
    return this.http.put(this.componentUrl + '/' + user.id, user, {headers});
  }




}


// getUsers(): Observable<any>{
//   return this.http.get(this.componentUrl + '/GetUsers')
// }

