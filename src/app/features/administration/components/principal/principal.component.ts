import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Post } from '../../../../shared/model/post';
import { ServicesService } from '../../../../shared/services/services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'root-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  listPost$ = new Observable<Post[]>();

  constructor(private servicePost: ServicesService){
    this.carregaPosts();
  }

  carregaPosts(){
    this.listPost$ = this.servicePost.listaPost();
  }
}
