import { CommonModule} from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../../../../shared/model/post';
import { ServicesService } from '../../../../shared/services/services.service';
import { Observable, catchError, of } from 'rxjs';
import { formatterDatePipe } from '../../../../shared/pipes/formatter-date.pipe';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../../shared/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorOptionalComponent } from '../../../../shared/error-optional/error-optional.component';

@Component({
  selector: 'root-principal',
  standalone: true,
  imports: [CommonModule, formatterDatePipe, ErrorDialogComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  listPost$: Observable<Post[]> | null = null;

  constructor(private servicePost: ServicesService, public dialog: MatDialog, private router: Router, private rotaAtual: ActivatedRoute, private snackbar: MatSnackBar){
    this.carregaPosts();
  }

  carregaPosts(){
    this.listPost$ = this.servicePost.listaPost().pipe(
      catchError(error => {
        this.popupErro("Erro ao carregar os Posts do site.")
        return of([])
      })
    );
  }

  // Editando post.
  alterarPost(idPost: Post){
    this.router.navigate(['editar-post',idPost.id], {relativeTo: this.rotaAtual});
  }

  // Deletando post.
  deletarPost(post: Post){

    const dialogRef = this.dialog.open(ErrorOptionalComponent, {
      data: post.title,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result){
        this.servicePost.deletaPost(post.id).subscribe(() => {
          this.snackbar.open("Curso removido com sucesso!", 'OK', {duration: 5000, verticalPosition: 'top', horizontalPosition: 'center'});
          this.carregaPosts();
        },
          (error) => this.popupErro("Erro ao tentar remover Post")
        );
      }
    });
  }

  // pop-up de erro.
  popupErro(erro: string){
    this.dialog.open(ErrorDialogComponent, {data: erro});
  }
}
