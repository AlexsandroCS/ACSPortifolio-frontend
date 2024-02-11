import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HomePrincipalComponent } from "./containers/home-principal/home-principal.component";
import { SobreComponent } from "./containers/sobre/sobre.component";

export const ROUTE_HOME: Routes = [
  {
    path: '',
    component: HomePrincipalComponent,
    title: 'AlexsandroCS - Portifólio / Blog'
  },
  {
    path: 'project',
    component: SobreComponent,
    title: 'AlexsandroCS - Sobre'
  }
];
