import { Component } from '@angular/core';
import { AdministrationModule } from './administration.module';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './components/aside/aside.component';
import { HomeAdminComponent } from './containers/home-admin/home-admin.component';

@Component({
  selector: 'root-amn',
  standalone: true,
  imports: [AdministrationModule, AsideComponent, HomeAdminComponent, CoreModule, RouterModule],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss'
})
export class AdministrationComponent {

}
