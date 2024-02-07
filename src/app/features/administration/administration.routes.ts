import { Routes } from "@angular/router";
import { HomeAdminComponent } from "./containers/home-admin/home-admin.component";
import { FormAdminComponent } from "./containers/form-admin/form-admin.component";

export const ROUTE_ADMIN: Routes = [
  {
    path: '',
    component: HomeAdminComponent,
    title: 'Administração - Inicio'
  },
  {
    path: 'novo-post',
    component: FormAdminComponent,
    title: 'Administração - Novo Post'
  }
];
