import { Component } from '@angular/core';
import { HomeModule } from '../../home.module';
import { CoreModule } from '../../../../core/core.module';

@Component({
  selector: 'app-home-principal',
  standalone: true,
  imports: [HomeModule, CoreModule],
  templateUrl: './home-principal.component.html',
  styleUrl: './home-principal.component.scss'
})
export class HomePrincipalComponent {

}
