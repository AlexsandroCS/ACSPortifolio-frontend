import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }

  login(dadosLogin: Partial<Login>){
    return this.http.post(this.API, dadosLogin).subscribe(
      (response: any) => {
        localStorage.setItem('token_login', response.token);
      },
      (error: any) => {
        console.log("Ocorreu um erro na hora de fazer login!")
      }
    );
  }

  autenticaToken(){
    if(localStorage.getItem("token_login") != null){
      return true;
    }
    return false;
  }

  exit(){
    localStorage.clear();
  }
}
