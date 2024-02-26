import { Component } from '@angular/core';
import { ServicesService } from '../../../../shared/services/services.service';
import { Post } from '../../../../shared/model/post';
import { ActivatedRoute } from '@angular/router';
import { formatterDatePipe } from '../../../../shared/pipes/formatter-date.pipe';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [formatterDatePipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  postagem: Post | undefined;

  constructor(private postService: ServicesService, private rotaAtual: ActivatedRoute){
    const capturaPostID = Number(this.rotaAtual.snapshot.paramMap.get('id'));

    this.capturandoPost(capturaPostID)
  }

  capturandoPost(idPost: number){
    this.postService.capturaPostUnico(idPost).subscribe(
      (post) => {
        this.postagem = post;
      }
    )
  }

  configuraTag(texto: string): string[]{
    const listaTag = texto.split(", ");
    return listaTag;
  }
}
