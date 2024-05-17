import { Component } from '@angular/core';
import { CoreModule } from '../../../../core/core.module';
import { ServicesService } from '../../../../shared/services/services.service';
import { Post } from '../../../../shared/model/post';
import { ErrorDialogComponent } from '../../../../shared/error-dialog/error-dialog.component';
import { formatterDatePipe } from '../../../../shared/pipes/formatter-date.pipe';
import { Observable, catchError, interval, of, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { PostPage } from '../../../../shared/model/post-page';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule, CoreModule, formatterDatePipe, ErrorDialogComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  listPostPrincipal$: Observable<Post[]> | null = null;

  constructor(public postService: ServicesService, public dialog: MatDialog){
    this.capturaPostsPrincipais();
  }

  // capturaPostsPrincipais(){
  //   this.listPostPrincipal$ = this.postService.listaPost().pipe(
  //     catchError((error) => {
  //       this.popupErro("Erro ao carregar posts!")
  //       return of([])
  //     })
  //   );
  // }

  capturaPostsPrincipais(){
    const verificaStoragePost = localStorage.getItem("storagePost");

    if (verificaStoragePost) {
      // Se os dados já estiverem armazenados localmente, atribua-os à variável listPostPrincipal$
      this.listPostPrincipal$ = of(JSON.parse(verificaStoragePost));
    }
    else {
      // Se os dados não estiverem armazenados localmente, faça a requisição para obtê-los
      this.listPostPrincipal$ = this.postService.listaPost().pipe(
        switchMap(posts => {
          // Salva os dados no localStorage
          localStorage.setItem("storagePost", JSON.stringify(posts));
          // Retorna os dados recebidos da requisição
          return of(posts);
        }),
          catchError((error) => {
            this.popupErro("Erro ao carregar posts!")
            return of();
         })
      );
    }

    interval(120000).subscribe(() => {
      this.postService.listaPost().subscribe(
        (posts) => {
          // Atualiza os dados na variável listPostPrincipal$
          this.listPostPrincipal$ = of(posts);
          // Salva os novos dados no localStorage
          localStorage.setItem("storagePost", JSON.stringify(posts));
        },
        (error) => {
          this.popupErro("Erro ao atualizar posts!");
        }
      );
    });
  }

  popupErro(erro: string){
    this.dialog.open(ErrorDialogComponent, {data: erro});
  }

  removeTagsHtml(texto: string): string{
    const regex = /<[^>]*>/g;
    return texto.replace(regex,"");
  }

  configuraTag(texto: string): string[]{
    const listaTag = texto.split(", ");
    return listaTag;
  }

  public configurandoTitleLinkSite(title: string): string{
    const mudaText = title.replace(/ /g, '-');
    const mudaTextTwo = mudaText.replace(/#/g, 'sharp');
    return mudaTextTwo.toLowerCase();
  }
}
