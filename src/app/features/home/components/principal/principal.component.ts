import { Component } from '@angular/core';
import { CoreModule } from '../../../../core/core.module';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
