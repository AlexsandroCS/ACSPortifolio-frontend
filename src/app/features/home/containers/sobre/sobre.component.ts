import { Component } from '@angular/core';
import { HomeModule } from '../../home.module';
import { CoreModule } from '../../../../core/core.module';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [HomeModule, CoreModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
