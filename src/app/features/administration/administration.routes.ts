import { Routes } from "@angular/router";
import { AdministrationComponent } from './administration.component';
import { HomeAdminComponent } from "./containers/home-admin/home-admin.component";

export const ROUTE_ADMIN: Routes = [
  {
    path: '',
    component: HomeAdminComponent,
    title: 'Administração - Inicio'
  }
];
