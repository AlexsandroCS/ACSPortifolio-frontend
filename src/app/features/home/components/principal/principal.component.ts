import { Component } from '@angular/core';
import { CoreModule } from '../../../../core/core.module';

@Component({
  selector: 'principal',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
