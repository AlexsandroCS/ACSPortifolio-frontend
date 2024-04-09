import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { inject } from '@angular/core';

export const autorizadoGuard: CanActivateFn = (route, state, login: LoginService = inject(LoginService), rota: Router = inject(Router)) => {
  const capturaToken = localStorage.getItem("token_login");
  //return login.autenticaToken(capturaToken!);

  if(login.autenticaTokenFail()){
    return true;
  }
  else{
    rota.navigate(['/login']);
    return false;
  }
};
