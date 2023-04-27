import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {User} from "../models/user";
import {Router} from "@angular/router";
import {AuthentificationService} from "../services/authentification.service";
import {UserService} from "../services/user.service";
import {Role} from "../models/role";
import {Site} from "../models/site";
import {Service} from "../models/service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  email = '';
  password = '';
  nom = '';
  prenom = '';
  phone: string = '';
  phoneFix: string = '';
  serviceId: number = 0;
  siteId: number = 0;
  roleId: number = 0;
  wrongCredentials = false;
  userFormGroup!: FormGroup;
  currentUser: User | undefined;
  errorMessage!: string;
  roles: Role[] = [];
  sites: Site[] = [];
  services: Service[] = [];



  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.services = [
      { nom: 'Comptabilité', id: 1},
      { nom: 'Production', id: 2},
      { nom: 'Accueil', id: 3},
      { nom: 'Informatique', id: 4},
      { nom: 'Commercial', id: 5},
    ];

    this.sites = [
      { ville: 'Paris', id: 1},
      { ville: 'Nantes', id: 2},
      { ville: 'Toulouse', id: 3},
      { ville: 'Nice', id: 4},
      { ville: 'Lille', id: 5},
    ];

    this.roles = [
      { nom: 'User', id: 1},
      { nom: 'Admin', id: 2}
    ];

    this.userFormGroup = this.fb.group({
      email: this.fb.control(""),
      password: this.fb.control(""),
      nom: this.fb.control(""),
      prenom: this.fb.control(""),
      phone: this.fb.control(""),
      phoneFix: this.fb.control(""),
      serviceId: this.fb.control(0),
      siteId: this.fb.control(0),
      roleId: this.fb.control(0)
    });
  }

  register() {
    this.nom = this.userFormGroup.value.nom;
    this.prenom = this.userFormGroup.value.prenom;
    this.email = this.userFormGroup.value.email;
    this.phone = this.userFormGroup.value.phone;
    this.phoneFix = this.userFormGroup.value.phoneFix;
    this.password = this.userFormGroup.value.password;
    this.serviceId = this.userFormGroup.value.serviceId;
    this.siteId = this.userFormGroup.value.siteId;
    this.roleId = this.userFormGroup.value.roleId;

    this.userService.addUser(this.nom, this.prenom, this.phone, this.phoneFix, this.email, this.password, this.serviceId, this.siteId, this.roleId).subscribe(result => {
      this.router.navigate(['/login']);
    }, error => {
      if (error.status == 401) {
        error.statusText = "Impossible de vous enregistrer, veuillez recommencer";
      }
      this.errorMessage = error.statusText;
    });

  }
}
