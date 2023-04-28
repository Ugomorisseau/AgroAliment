import { Component } from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ServicesService} from "../services/services.service";

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent {

  nom = '';
  userFormGroup!: FormGroup;
  currentUser: User | undefined;
  errorMessage!: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private service: ServicesService
  ) {
  }

  ngOnInit() {

    this.userFormGroup = this.fb.group({
      nom: this.fb.control("")
    });
  }

  register() {
    this.nom = this.userFormGroup.value.nom;

    this.service.addService(this.nom).subscribe(result => {
      this.router.navigate(['/home']);
    }, error => {
      if (error.status == 401) {
        error.statusText = "Impossible d'ajouter ce service";
      }
      this.errorMessage = error.statusText;
    });

  }
}

