import { Login } from './../../../../shared/model/login';
import { Component } from '@angular/core';
import { ServicesService } from '../../../../shared/services/services.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from '../../../../shared/services/login.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, public login: LoginService, private snackBar: MatSnackBar, private location: Location){


    this.formLogin = this.formBuilder.group({
      email: [''],
      password: [''],
    });

    this.verificaLogin();

  }

  // Enviando dados do formulário para autenticação.
  enviarLogin(){
    this.login.login(this.formLogin.value);
  }

  // verifica autenticação do login.
  verificaLogin(){
    if(this.login.autenticaToken()){
      console.log("Você já está logado!");
      window.location.href = '/admin';
    }
    else{
      this.enviarLogin();
    }
  }

  // Botão ver e esconder senha
  senhaInput: boolean = true;
  passwordInput: boolean = true;

  toggleSenha(): void{
    this.senhaInput = !this.senhaInput;
    this.passwordInput = !this.passwordInput;
  }
}
