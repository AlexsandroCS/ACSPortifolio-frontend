import { Component } from '@angular/core';
import { HomeModule } from './home.module';
import { CoreModule } from '../../core/core.module';

@Component({
  selector: 'core-home',
  standalone: true,
  imports: [HomeModule, CoreModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  emailGlobal: string = 'Alexsandro.ACS98@Gmail.com';
}
