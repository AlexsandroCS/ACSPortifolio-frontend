import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly API = 'http://localhost:8080/api/post';

  constructor(private http: HttpClient) { }

  // Listando todos os posts.
  listaPost(){
    return this.http.get<Post[]>(this.API);
  }

  // Capturrando post específico.
  capturaPostUnico(idPost: number){
    return this.http.get<Post>(`${this.API}/${idPost}`)
  }

  // Salvando um novo post.
  criarPost(form: Partial<Post>){
    return this.http.post<Post>(this.API, form);
  }

  // Editando um post existente.
  alterarPost(form: Partial<Post>){
    return this.http.put<Post>(`${this.API}/${form.id}`, form);
  }

  // Método que distingue o salvar do editar.
  enviarPost(post: Partial<Post>){
    if(post.id){
      return this.alterarPost(post);
    }
    return this.criarPost(post);
  }

  // Deletando um post.
  deletaPost(idPost: string){
    return this.http.delete(`${this.API}/${idPost}`);
  }

}
