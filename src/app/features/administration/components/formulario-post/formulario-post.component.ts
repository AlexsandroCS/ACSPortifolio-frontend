import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ServicesService } from '../../../../shared/services/services.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../../shared/model/post';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

// OBS 1 : Eu importei o "Validators" porém vamos importar esse tipo de validação para input de senhas.

@Component({
  selector: 'root-formulario-post',
  standalone: true,
  imports: [ReactiveFormsModule, EditorModule],
  templateUrl: './formulario-post.component.html',
  styleUrl: './formulario-post.component.scss'
})
export class FormularioPostComponent {

  form!: FormGroup;

  // 1 - Após criar um formulário precisamos fazer a injeção de dependências do FormBuilder
  constructor(private fb: FormBuilder, public servicePost: ServicesService, private location: Location, private rotaAtual: ActivatedRoute, private snackBar: MatSnackBar){
    // 2 - Vamos passar o método group do FormBuilder para um novo "form"

    this.form = this.fb.group({
      // 3 - atributos do meu objeto Post.
      id: [],
      title: ['', Validators.required], // 4 - Validators.required faz a verificação se o campo é vazio, caso seja vazio ele retorna um objeto de erro.
      content: ['', Validators.required],
      tag: ['', Validators.required],
      imageLink: ['', Validators.required],
    })

    const post: Post = this.rotaAtual.snapshot.data['postagem'];
    this.form.setValue({
      id: post.id,
      title: post.title,
      content: post.content,
      tag: post.tag,
      imageLink: post.imageLink
    })
  }

  enviarPost(){
    if (this.form.valid){
      this.servicePost.enviarPost(this.form.value).subscribe(
        result => this.envioConfirmado(),
        erro => this.erroEnvio());
    }
  }

  cancelarEnvio(): void{
    this.location.back();
  }

  // pop-ups do formulário.
  private envioConfirmado(){
    this.snackBar.open('Post enviado com sucesso!', 'OK', {duration: 5000});
    this.cancelarEnvio();
  }

  private erroEnvio(){
    this.snackBar.open('Erro ao salvar Post!', 'OK', {duration: 5000});
  }
}
