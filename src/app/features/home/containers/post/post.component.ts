import { Component } from '@angular/core';
import { HomeModule } from '../../home.module';
import { CoreModule } from '../../../../core/core.module';

@Component({
  selector: 'app-postagem',
  standalone: true,
  imports: [HomeModule, CoreModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

}
