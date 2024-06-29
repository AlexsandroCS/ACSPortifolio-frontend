import { Component } from '@angular/core';
import { ServicesService } from '../../../../shared/services/services.service';
import { Post } from '../../../../shared/model/post';
import { ActivatedRoute } from '@angular/router';
import { formatterDatePipe } from '../../../../shared/pipes/formatter-date.pipe';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';

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
  titlePagina!: string;

  constructor(private postService: ServicesService, private rotaAtual: ActivatedRoute, private sanitizer: DomSanitizer, private titleService: Title){
    const capturaPostTitle = this.rotaAtual.snapshot.paramMap.get('title');
    this.titlePagina = this.rotaAtual.snapshot.paramMap.get('title')!;
    const title = postService.configurandoTitleLinkAPI(capturaPostTitle!);
    this.capturandoPost(title);
    this.titleService.setTitle("AlexsandroCS | Blog | Post - " + title.charAt(0).toUpperCase() + title.slice(1));
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
