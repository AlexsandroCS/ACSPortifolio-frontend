import { Routes } from "@angular/router";
import { HomePrincipalComponent } from "./containers/home-principal/home-principal.component";
import { SobreComponent } from "./containers/sobre/sobre.component";
import { postResolver } from "../../core/guards/post.resolver";
import { PostComponent } from "./containers/post/post.component";

export const ROUTE_HOME: Routes = [
  {
    path: '',
    component: HomePrincipalComponent,
    title: 'AlexsandroCS - Portifólio / Blog'
  },
  {
    path: 'post/:title',
    component: PostComponent,
    title: 'AlexsandroCS - Post'
  },
  {
    path: 'sobre',
    component: SobreComponent,
    title: 'AlexsandroCS - Sobre'
  }
];
