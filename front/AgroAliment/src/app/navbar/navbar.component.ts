import {Component, Input} from '@angular/core';
import {MenuItem} from "primeng/api";
import {UserViewModel} from "../models/user";
import {UserService} from "../services/user.service";
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input()

  currentUser!: UserViewModel;
  isAuth: boolean = false;

  public items: MenuItem[] = [
    {
      label: 'Salariés',
      icon: 'pi pi-user',
      routerLink: '/home'
    },
    {
      label: 'Services',
      icon: 'pi pi-fw pi-pencil',
      routerLink: '/service'
    },
    {
      label: 'Sites',
      icon: 'pi pi-fw pi-user',
      routerLink: '/site'
    }
  ];

  constructor(private userService: UserService,
              private authService: AuthentificationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.currentUser = this.authService.User();
    this.canDisplayLogin();
    // this.userService.getData().then(users => console.log(users));
  }

  isAdmin(){
    return this.currentUser?.roleId == 2;
  }

  canDisplayLogin(): boolean{
    if (this.authService.isAuthenticated()){
      this.isAuth = true;
    }
    return this.isAuth;
  }

  logout(){
    this.authService.logout();
  }

}
