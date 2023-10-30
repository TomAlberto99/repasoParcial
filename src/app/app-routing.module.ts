import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing/landing-page.component';
import { LoginComponent } from './components/LoginComponent/login.component';
import { HomePageComponent } from './components/hommeComponent/home-page.component';
import { RegistroComponent } from './components/registrerComponent/registro.component';

const routes: Routes = [
  {
    path : 'landing',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomePageComponent

  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
