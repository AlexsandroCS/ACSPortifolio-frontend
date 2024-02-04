import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly API = 'http://localhost:8080/api/post';

  constructor(private http: HttpClient) { }

  listaPost(){
    return this.http.get<Post[]>(this.API);
  }
}
