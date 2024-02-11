import { Routes } from "@angular/router";
import { LoginPrincipalComponent } from "./containers/login-principal/login-principal.component";

export const ROUTE_LOGIN: Routes = [
  {
    path: '',
    component: LoginPrincipalComponent,
    title: 'AlexsandroCS - Login'
  }
];
