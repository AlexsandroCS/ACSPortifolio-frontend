import { Component } from '@angular/core';
import { CoreModule } from '../../../../core/core.module';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-login-principal',
  standalone: true,
  imports: [CoreModule,LoginFormComponent],
  templateUrl: './login-principal.component.html',
  styleUrl: './login-principal.component.scss'
})
export class LoginPrincipalComponent {

}
