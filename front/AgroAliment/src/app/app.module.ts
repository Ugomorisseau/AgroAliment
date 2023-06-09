import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TreeTableModule} from 'primeng/treetable';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from './navbar/navbar.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {UserDeleteComponent} from './user-delete/user-delete.component';
import {AutoCompleteModule} from "primeng/autocomplete";
import {NewUserComponent} from './new-user/new-user.component';
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownModule} from "primeng/dropdown";
import {ServiceViewComponent} from './service-view/service-view.component';
import {SiteViewComponent} from './site-view/site-view.component';
import {ModifyUserComponent} from './modify-user/modify-user.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { NewSiteComponent } from './new-site/new-site.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    UserDeleteComponent,
    NewUserComponent,
    ServiceViewComponent,
    SiteViewComponent,
    ModifyUserComponent,
    NewServiceComponent,
    NewSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeTableModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,
    PanelMenuModule,
    AutoCompleteModule,
    InputTextModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    DropdownModule,
    BrowserModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
