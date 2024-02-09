import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'root-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

  constructor(private router: Router, private rotaAtual: ActivatedRoute){

  }

  novoPost(){
    this.router.navigate(['novo-post'], {relativeTo: this.rotaAtual});
  }
}
