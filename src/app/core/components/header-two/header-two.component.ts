import { Component } from '@angular/core';
import { LoginService } from '../../../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'core-header-two',
  standalone: true,
  imports: [],
  templateUrl: './header-two.component.html',
  styleUrl: './header-two.component.scss'
})
export class HeaderTwoComponent {

  constructor(private loginService: LoginService, private rota: Router){}

  desconectarLogin(){
    this.loginService.exit();
    this.rota.navigate(["/"])
  }
}
