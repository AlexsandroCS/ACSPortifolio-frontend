import { Component } from '@angular/core';
import { ServicesService } from '../../../../shared/services/services.service';
import { Post } from '../../../../shared/model/post';
import { ActivatedRoute } from '@angular/router';
import { formatterDatePipe } from '../../../../shared/pipes/formatter-date.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [formatterDatePipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  postagem: Post = {} as Post;
  listaTagPostagem: string[] = [];
  contentPostagem: SafeHtml = ''

  constructor(private postService: ServicesService, private rotaAtual: ActivatedRoute, private sanitizer: DomSanitizer){
    const capturaPostID = Number(this.rotaAtual.snapshot.paramMap.get('id'));
    this.capturandoPost(capturaPostID)
  }

  capturandoPost(idPost: number){
    this.postService.capturaPostUnico(idPost).subscribe(
      (post) => {
        this.postagem = post;
        this.listaTagPostagem = this.postagem.tag.split(", ");
        this.contentPostagem = this.sanitizer.bypassSecurityTrustHtml(this.postagem.content);
      }
    )
  }
}
