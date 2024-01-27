import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjetcComponent } from './pages/project/projetc.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'AlexsandroCS - Portifólio | Início'
  },
  {
    path: 'project',
    component: ProjetcComponent,
    title: 'Página de Projetos do Portifólio.'
  }
];
