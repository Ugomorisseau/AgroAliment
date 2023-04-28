import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {SitesService} from "../services/sites.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-site',
  templateUrl: './new-site.component.html',
  styleUrls: ['./new-site.component.scss']
})
export class NewSiteComponent {

  ville = '';
  userFormGroup!: FormGroup;
  currentUser: User | undefined;
  errorMessage!: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private siteService: SitesService
  ) {
  }

  ngOnInit() {

    this.userFormGroup = this.fb.group({
      ville: this.fb.control("")
    });
  }

  register() {
    this.ville = this.userFormGroup.value.ville;

    this.siteService.addSite(this.ville).subscribe(result => {
      this.router.navigate(['/home']);
    }, error => {
      if (error.status == 401) {
        error.statusText = "Impossible d'ajouter ce site";
      }
      this.errorMessage = error.statusText;
    });

  }



}
