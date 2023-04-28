import {Component} from '@angular/core';
import {User, UserViewModel} from "../models/user";
import {UserService} from "../services/user.service";
import {TreeNode} from "primeng/api";
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  public users: User[] = [];
  cols: any[] = [];
  currentUser!: UserViewModel;
  searchValue: string = '';


  constructor(private userService: UserService,
              private authService: AuthentificationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.currentUser = this.authService.User();
    // this.userService.getData().then(users => console.log(users));

    this.userService.getData().then((users) => (this.users = users));
    console.log(this.users);
    this.cols = [
      {field: 'prenom', header: 'Prénom'},
      {field: 'nom', header: 'Nom'},
      {field: 'phoneFix', header: 'Téléphone Fix'},
      {field: 'phone', header: 'Téléphone Mobile'}
    ];
    console.log(this.userService.getData().then((users) => (this.users = users)));
  }

  isAdmin() {
    return this.currentUser?.roleId == 2;
  }

  onDeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('success');
        this.router.navigate(['/deletedUser']);
      },
      (error) => {
        console.error(error);
        // Une erreur s'est produite lors de la suppression de l'utilisateur
      }
    );
  }

  onInput(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;

    if (this.searchValue != '') {
      if (/^\d+$/.test(this.searchValue)) {
        return;
      } else {
        this.userService.Search(this.searchValue).subscribe((users: User[]) => {
          this.users = users;
        });
      }
    } else {
      this.userService.getData().then((users: User[]) => {
        this.users = users;
      });
    }
  }

}
