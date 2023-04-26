import {Component} from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {TreeNode} from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  public users: User[] = [];
  cols: any[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    // this.userService.getData().then(users => console.log(users));

    this.userService.getData().then((users) => (this.users = users));
    this.cols = [
      {field: 'prenom', header: 'Prénom'},
      {field: 'nom', header: 'Nom'},
      {field: 'phoneFix', header: 'Téléphone Fix'},
      {field: 'phone', header: 'Téléphone Mobile'}
    ];
    console.log(this.userService.getData().then((users) => (this.users = users)));
  }

  public toto(x: any) {
    console.log(x, 'tutu');
  }

}
