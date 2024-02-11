import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  senha: boolean = true;
  password: boolean = true;

  toggleSenha(): void{
    this.senha = !this.senha;
    this.password = !this.password;
  }
}
