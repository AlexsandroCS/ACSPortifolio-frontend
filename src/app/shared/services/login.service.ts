import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private rota: Router) { }

  login(dadosLogin: Partial<Login>){
    return this.http.post(`${this.API}/login`, dadosLogin).subscribe(
      (response: any) => {
        localStorage.setItem('token_login', response.token);
        this.rota.navigate(["/admin"]);

        const expiraToken = 60 * 60 * 4 * 1000; // 4 Horas para o token expirar.
        this.timeToken(expiraToken);
      },
      (error: any) => {
        console.log("Token autenticador não foi gerado!")
      }
    );
  }

  private timeToken(expiraToken: number){
    setTimeout(() => {
      localStorage.removeItem('token_login');
    }, expiraToken);
  }

  autenticaToken(){
    if (localStorage.getItem("token_login") === null || localStorage.getItem("token_login") === ""){
      return false;
    }
    else{
      return true;
    }
  }

  exit(){
    localStorage.clear();
  }
}
