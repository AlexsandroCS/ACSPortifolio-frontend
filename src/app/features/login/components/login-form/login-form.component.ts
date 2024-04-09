import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    this.verificaLogin();

    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(13)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });

  }

  // Enviando dados do formulário para autenticação.
  enviarLogin(){
    if(this.formLogin.valid){
      this.login.login(this.formLogin.value);
    }
  }

  // verifica autenticação do login.
  /*
  verificaLogin(){
    const capturandoToken = localStorage.getItem("token_login");
    this.login.autenticaToken(capturandoToken!).then((resultado) => {
    }).catch((error) => {
      console.error("Erro:", error);
    });
  }
  */

  // verifica autenticação do login.
  verificaLogin(){
    if(localStorage.getItem("token_login")){
      if(this.login.autenticaTokenFail()){
        window.location.href = '/admin';
      }
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
