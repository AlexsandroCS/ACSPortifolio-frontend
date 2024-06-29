import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../model/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://44.223.75.61:32768/api';

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
      localStorage.clear();
    }, expiraToken);
  }

  // Autenticação de Token com API
  autenticaToken(capturaToken: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (capturaToken === null || capturaToken === '') {
        resolve(false);
        this.exit();
      } else {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });

        this.http.post(`${this.API}/validate`, { verificaToken: capturaToken }, { headers }).subscribe(
          (response: any) => {

            if(response.is_valid === false){
              this.exit();
            }else{
              const trueResponse = response.is_valid;
              return trueResponse;
            }
          },
          (error: any) => {
            reject(error);
          }
        );
      }
    });
  }

  // Autenticação meia boca só para testar
  autenticaTokenFail(){
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
