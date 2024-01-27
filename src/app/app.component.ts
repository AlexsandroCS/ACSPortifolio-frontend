import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreModule, PagesModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
