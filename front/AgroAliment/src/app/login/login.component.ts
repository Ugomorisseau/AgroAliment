import {Component} from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Data, User} from "../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  token?: Data;
  email = '';
  password = '';
  wrongCredentials = false;
  userFormGroup!: FormGroup;
  currentUser: User | undefined;
  errorMessage!: string;

  constructor(
    private authService: AuthentificationService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.userFormGroup = this.fb.group({
      email: this.fb.control(""),
      password: this.fb.control("")
    });

  }

  show: boolean = false;

  login1() {
    this.email = this.userFormGroup.value.email;
    this.password = this.userFormGroup.value.password;
    this.authService.loginWeb(this.email, this.password);
    this.authService.login(this.email, this.password).subscribe((response) => {
        // Récupération du token depuis la réponse de l'API
        let token = response.body;
        if (token)
        {
          this.token = token;
          sessionStorage.setItem('token', JSON.stringify(this.token))
          this.router.navigate(['/home']);
          console.log('Token:', this.token);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}


