import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { map } from 'rxjs';

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
  capturaPostUnico(titlePost: String){
    return this.http.get<Post>(`${this.API}/${titlePost}`);
    // Aplicando o regex.
    // .pipe(map((capturaPost: Post) => {
    //   const capturaTituloEditado = this.transformarTitulo(capturaPost.title);
    //   return {...capturaPost, title: capturaTituloEditado}
    // }));
  }

  // Salvando um novo post.
  criarPost(form: Partial<Post>){
    return this.http.post<Post>(this.API, form, this.enviandoToken());
  }

  // Editando um post existente.
  alterarPost(form: Partial<Post>){
    return this.http.put<Post>(`${this.API}/${form.id}`, form, this.enviandoToken());
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
    return this.http.delete(`${this.API}/${idPost}`, this.enviandoToken());
  }

  // Conectando Token com a header da API.
  enviandoToken(){
    const anToken = localStorage.getItem('token_login');

    if (!anToken) {
      throw new Error('Token não encontrado no localStorage!');
    }

    const headersCommunication = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${anToken}`
    });

    const requestOptions = {headers: headersCommunication}

    return requestOptions;
  }

  // Regex
  public transformarTitulo(title: string): string {
    // Substituir caracteres especiais e espaços por "-"
    const tituloTransformado = title.replace(/[^\w\s]/g, "-").replace(/\s+/g, "-");
    // Remover caracteres especiais e espaços no final
    return tituloTransformado.replace(/[^\w\s]$/, "").replace(/\s+$/, "");
  }
}
