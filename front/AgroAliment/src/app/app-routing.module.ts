import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {UserDeleteComponent} from "./user-delete/user-delete.component";
import {NewUserComponent} from "./new-user/new-user.component";
import {ServicesService} from "./services/services.service";
import {ServiceViewComponent} from "./service-view/service-view.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent },
  {path: 'deletedUser', component: UserDeleteComponent},
  {path: 'addUser', component: NewUserComponent},
  {path: 'service', component: ServiceViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
