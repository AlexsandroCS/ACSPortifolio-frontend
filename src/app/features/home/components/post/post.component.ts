import { Component } from '@angular/core';
import { ServicesService } from '../../../../shared/services/services.service';
import { Post } from '../../../../shared/model/post';
import { ActivatedRoute } from '@angular/router';
import { formatterDatePipe } from '../../../../shared/pipes/formatter-date.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [formatterDatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  postagem: Post = {} as Post;
  listaTagPostagem: string[] = [];
  contentPostagem: SafeHtml = ''

  constructor(private postService: ServicesService, private rotaAtual: ActivatedRoute, private sanitizer: DomSanitizer){
    const capturaPostTitle = this.rotaAtual.snapshot.paramMap.get('title');

    this.capturandoPost(postService.configurandoTitleLinkAPI(capturaPostTitle!));
  }

  capturandoPost(titlePost: string){
    this.postService.capturaPostUnico(titlePost).subscribe(
      (post) => {
        this.postagem = post;
        this.listaTagPostagem = this.postagem.tag.split(", ");
        this.contentPostagem = this.sanitizer.bypassSecurityTrustHtml(this.postagem.content);
      }
    )
  }
}
