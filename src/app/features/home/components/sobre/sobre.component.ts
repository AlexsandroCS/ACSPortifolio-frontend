import { Component } from '@angular/core';
import { CoreModule } from '../../../../core/core.module';

@Component({
  selector: 'page-sobre',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
