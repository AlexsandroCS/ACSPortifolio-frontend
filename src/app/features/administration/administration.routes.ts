import { Routes } from "@angular/router";
import { HomeAdminComponent } from "./containers/home-admin/home-admin.component";
import { FormAdminComponent } from "./containers/form-admin/form-admin.component";
import { postResolver } from "../../core/guards/post.resolver";

export const ROUTE_ADMIN: Routes = [
  {
    path: '',
    component: HomeAdminComponent,
    title: 'Administração - Inicio'
  },
  {
    path: 'novo-post',
    component: FormAdminComponent,
    resolve: {postagem: postResolver},
    title: 'Administração - Novo Post'
  },
  {
    path: 'editar-post/:id',
    component: FormAdminComponent,
    resolve: {postagem: postResolver},
    title: 'Administração - Editando Post'
  }
];
