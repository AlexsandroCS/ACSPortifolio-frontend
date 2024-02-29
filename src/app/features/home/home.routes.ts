import { Routes } from "@angular/router";
import { HomePrincipalComponent } from "./containers/home-principal/home-principal.component";
import { SobreComponent } from "./containers/sobre/sobre.component";
import { postResolver } from "../../core/guards/post.resolver";

export const ROUTE_HOME: Routes = [
  {
    path: '',
    component: HomePrincipalComponent,
    title: 'AlexsandroCS - Portifólio / Blog'
  },
  {
    path: 'project/:id',
    component: SobreComponent,
    resolve: {capturaPost: postResolver},
    title: 'AlexsandroCS - Sobre'
  }
];
