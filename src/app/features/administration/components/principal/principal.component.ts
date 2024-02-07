import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../../../../shared/model/post';
import { ServicesService } from '../../../../shared/services/services.service';
import { Observable, catchError, of } from 'rxjs';
import { formatterDatePipe } from '../../../../shared/pipes/formatter-date.pipe';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../../shared/error-dialog/error-dialog.component';



@Component({
  selector: 'root-principal',
  standalone: true,
  imports: [CommonModule, formatterDatePipe, ErrorDialogComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  listPost$ = new Observable<Post[]>();

  constructor(private servicePost: ServicesService, public dialog: MatDialog){
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

  // pop-up de erro.
  popupErro(erro: string){
    this.dialog.open(ErrorDialogComponent, {data: erro});
  }
}
