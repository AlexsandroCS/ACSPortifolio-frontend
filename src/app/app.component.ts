import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HomeModule } from './features/home/home.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreModule, HomeModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
