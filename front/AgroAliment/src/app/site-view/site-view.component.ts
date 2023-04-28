import { Component } from '@angular/core';
import {Site} from "../models/site";
import {UserViewModel} from "../models/user";
import {UserService} from "../services/user.service";
import {AuthentificationService} from "../services/authentification.service";
import {SitesService} from "../services/sites.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-view',
  templateUrl: './site-view.component.html',
  styleUrls: ['./site-view.component.scss']
})
export class SiteViewComponent {

  public sites: Site[] = [];
  cols: any[] = [];
  currentUser!: UserViewModel;
  searchValue: string = '';


  constructor(private userService: UserService,
              private authService: AuthentificationService,
              private service: SitesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.currentUser = this.authService.User();
    // this.userService.getData().then(users => console.log(users));

    this.service.getData().then((sites) => (this.sites = sites));
    this.cols = [
      {field: 'ville', header: 'Ville'},
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
        this.service.Search(this.searchValue).subscribe((sites: Site[]) => {
          this.sites = sites;
        });
      }
    } else {
      this.service.getData().then((sites: Site[]) => {
        this.sites = sites;
      });
    }
  }
}

