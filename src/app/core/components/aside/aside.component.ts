import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  @Input() email: string = '';
}
