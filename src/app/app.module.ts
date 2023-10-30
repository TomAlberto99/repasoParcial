import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/LoginComponent/login.component';
import { HomePageComponent } from './components/hommeComponent/home-page.component';
import { LandingPageComponent } from './components/landing/landing-page.component';
import { RegistroComponent } from './components/registrerComponent/registro.component';
import { FormsModule } from '@angular/forms';
import { ViewUserComponent } from './components/hommeComponent/viewUser/view-user.component';
import { AddPersonComponent } from './components/hommeComponent/add-person/add-person.component';
import { EditPersonComponent } from './components/hommeComponent/edit-person/edit-person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    LandingPageComponent,
    RegistroComponent,
    ViewUserComponent,
    AddPersonComponent,
    EditPersonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
