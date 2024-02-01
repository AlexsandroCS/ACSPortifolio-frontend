import { Routes } from '@angular/router';
import { AdministrationComponent } from './features/administration/administration.component';
import { ProjectComponent } from './features/home/components/project/project.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'AlexsandroCS - Portifólio | Início'
  },
  {
    path: 'project',
    component: ProjectComponent,
    title: 'Página de Projetos do Portifólio.'
  },
  {
    path: 'admin',
    component: AdministrationComponent,
    title: 'Página de administração de postagem.'
  }
];
