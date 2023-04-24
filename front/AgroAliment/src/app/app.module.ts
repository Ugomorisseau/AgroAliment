import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeTableModule } from 'primeng/treetable';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeTableModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
