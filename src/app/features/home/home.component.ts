import { Component } from '@angular/core';
import { HomeModule } from './home.module';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'core-home',
  standalone: true,
  imports: [HomeModule, CoreModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  emailGlobal: string = 'Alexsandro.ACS98@Gmail.com';
}
