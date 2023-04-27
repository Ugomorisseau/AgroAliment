import { Component } from '@angular/core';
import {User, UserViewModel} from "../models/user";
import {UserService} from "../services/user.service";
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";
import {Service} from "../models/service";
import {ServicesService} from "../services/services.service";

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.scss']
})
export class ServiceViewComponent {

  public services: Service[] = [];
  cols: any[] = [];
  currentUser!: UserViewModel;
  searchValue: string = '';


  constructor(private userService: UserService,
              private authService: AuthentificationService,
              private service: ServicesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.currentUser = this.authService.User();
    // this.userService.getData().then(users => console.log(users));

    this.service.getData().then((services) => (this.services = services));
    this.cols = [
      {field: 'nom', header: 'Nom'},
      {field: 'id', header: 'Numéro'}
    ];
  }

  isAdmin(){
    return this.currentUser?.roleId == 2;
  }

  // onDeleteUser(userId: number): void {
  //   this.userService.deleteUser(userId).subscribe(
  //     () => {
  //       console.log('success');
  //       this.router.navigate(['/deletedUser']);
  //     },
  //     (error) => {
  //       console.error(error);
  //       // Une erreur s'est produite lors de la suppression de l'utilisateur
  //     }
  //   );
  // }

  onInput(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;

    if (this.searchValue != '') {
      if (/^\d+$/.test(this.searchValue)) {
        return;
      } else {
        this.service.Search(this.searchValue).subscribe((services: Service[]) => {
          this.services = services;
        });
      }
    } else {
      this.service.getData().then((services: Service[]) => {
        this.services = services;
      });
    }
  }
}
