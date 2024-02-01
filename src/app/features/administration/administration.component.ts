import { Component } from '@angular/core';
import { AdministrationModule } from './administration.module';
import { CoreModule } from '../../core/core.module';

@Component({
  selector: 'root-amn',
  standalone: true,
  imports: [AdministrationModule, CoreModule],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss'
})
export class AdministrationComponent {

}
