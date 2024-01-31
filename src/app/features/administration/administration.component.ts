import { Component } from '@angular/core';
import { CoreModule } from '../../core/core.module';

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss'
})
export class AdministrationComponent {

}
