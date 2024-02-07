import { Component } from '@angular/core';
import { AdministrationModule } from '../../administration.module';
import { CoreModule } from '../../../../core/core.module';
import { FormularioPostComponent } from '../../components/formulario-post/formulario-post.component';

@Component({
  selector: 'app-form-admin',
  standalone: true,
  imports: [FormularioPostComponent, AdministrationModule, CoreModule],
  templateUrl: './form-admin.component.html',
  styleUrl: './form-admin.component.scss'
})
export class FormAdminComponent {

}
