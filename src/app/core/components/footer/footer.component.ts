import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() email: string = 'Alexsandro.ACS98@gmail.com';
}
