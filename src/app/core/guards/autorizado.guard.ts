import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { inject } from '@angular/core';

export const autorizadoGuard: CanActivateFn = (route, state, login: LoginService = inject(LoginService), rota: Router = inject(Router)) => {

  if(login.autenticaToken()){
    return true;
  }
  rota.navigate(['/login']);
  return false;
};
