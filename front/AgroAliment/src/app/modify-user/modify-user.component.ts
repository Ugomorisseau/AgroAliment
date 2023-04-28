import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../models/user";
import {Role} from "../models/role";
import {Site} from "../models/site";
import {Service} from "../models/service";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.scss']
})
export class ModifyUserComponent {

  user : User | undefined;
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
  formGroup!: FormGroup;
  currentUser: User | undefined;
  errorMessage!: string;
  roles: Role[] = [];
  sites: Site[] = [];
  services: Service[] = [];


  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).subscribe((user: User) => {
      this.user = user;
    });

    this.formGroup = this.fb.group({
      email: this.fb.control(""),
      password: this.fb.control(""),
      nom: this.fb.control(""),
      prenom: this.fb.control(""),
      phone: this.fb.control(""),
      phoneFix: this.fb.control("")
    });
  }

  modifyUser() {
    const user = {
      id: this.user?.id,
      prenom: this.formGroup.value.prenom == '' ? this.user?.prenom : this.formGroup.value.prenom,
      nom: this.formGroup.value.nom == '' ? this.user?.nom : this.formGroup.value.nom,
      email: this.formGroup.value.email == '' ? this.user?.email : this.formGroup.value.email,
      phoneFix: this.formGroup.value.phoneFix == '' ? this.user?.phoneFix : this.formGroup.value.phoneFix,
      phone: this.formGroup.value.phone == '' ? this.user?.phone : this.formGroup.value.phone,
      password: this.formGroup.value.password == '' ? this.user?.password : this.formGroup.value.password
    }

    this.userService.modifyUser(user).subscribe(result => {
      this.router.navigate(['/home']);
    }, error => {
      if (error.status == 401) {
        error.statusText = "Impossible de modifier, veuillez recommencer";
      }
      this.errorMessage = error.statusText;
    });

  }
}

