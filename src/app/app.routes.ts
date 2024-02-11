import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: ''
  },
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes').then(m => m.ROUTE_HOME)
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/administration/administration.routes').then(m => m.ROUTE_ADMIN)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.routes').then(m => m.ROUTE_LOGIN)
  }
];
