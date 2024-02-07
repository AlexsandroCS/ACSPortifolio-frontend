import { Component } from '@angular/core';
import { PrincipalComponent } from '../../components/principal/principal.component';
import { CoreModule } from '../../../../core/core.module';
import { AdministrationModule } from '../../administration.module';

@Component({
  selector: 'root-home-admin',
  standalone: true,
  imports: [PrincipalComponent, AdministrationModule, CoreModule],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss'
})
export class HomeAdminComponent {

}
