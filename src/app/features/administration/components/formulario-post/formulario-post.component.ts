import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

// OBS 1 : Eu importei o "Validators" porém vamos importar esse tipo de validação para input de senhas.

@Component({
  selector: 'root-formulario-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-post.component.html',
  styleUrl: './formulario-post.component.scss'
})
export class FormularioPostComponent {

  // 1 - Após criar um formulário precisamos fazer a injeção de dependências do FormBuilder
  constructor(private fb: FormBuilder){

  }

  // 2 - Vamos passar o método group do FormBuilder para um novo "form"
  form = this.fb.group({
    // 3 - Passando os names dos campos do formulário.
    title: ['', Validators.required], // 4 - Validators.required faz a verificação se o campo é vazio, caso seja vazio ele retorna um objeto de erro.
    content: ['', Validators.required],
    tag: ['', Validators.required],
    linkImage: ['', Validators.required]
  })


}
