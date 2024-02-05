import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { AsideComponent } from './components/aside/aside.component';
import { HomeAdminComponent} from './containers/home-admin/home-admin.component';

const adminImportExport = [AsideComponent, HomeAdminComponent];

@NgModule({
  imports: [CommonModule, adminImportExport, CommonModule, CoreModule],
  exports: [adminImportExport]
})
export class AdministrationModule { }
