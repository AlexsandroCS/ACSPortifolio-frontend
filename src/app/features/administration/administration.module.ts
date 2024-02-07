import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { AsideComponent } from './components/aside/aside.component';
import { HomeAdminComponent} from './containers/home-admin/home-admin.component';
import { ErrorDialogComponent } from '../../shared/error-dialog/error-dialog.component';
import { FormularioPostComponent } from './components/formulario-post/formulario-post.component';

const adminImportExport = [AsideComponent, HomeAdminComponent, FormularioPostComponent];

@NgModule({
  imports: [CommonModule, adminImportExport, CommonModule, CoreModule, ErrorDialogComponent],
  exports: [adminImportExport]
})
export class AdministrationModule { }
