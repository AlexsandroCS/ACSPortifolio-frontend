import { Component } from '@angular/core';
import { CoreModule } from '../../../../core/core.module';
import { ServicesService } from '../../../../shared/services/services.service';
import { Post } from '../../../../shared/model/post';
import { ErrorDialogComponent } from '../../../../shared/error-dialog/error-dialog.component';
import { formatterDatePipe } from '../../../../shared/pipes/formatter-date.pipe';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule, CoreModule, formatterDatePipe, ErrorDialogComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  listPostPrincipal$: Observable<Post[]> | null = null;

  constructor(private postService: ServicesService, public dialog: MatDialog){
    this.capturaPostsPrincipais();
  }

  capturaPostsPrincipais(){
    this.listPostPrincipal$ = this.postService.listaPost().pipe(
      catchError((error) => {
        this.popupErro("Erro ao carregar posts!")
        return of([])
      })
    );
  }

  popupErro(erro: string){
    this.dialog.open(ErrorDialogComponent, {data: erro});
  }

  removeTagsHtml(texto: string): string{
    const regex = /<[^>]*>/g;
    return texto.replace(regex,"");
  }
}
