import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { AsideComponent } from './components/aside/aside.component';
import { PrincipalComponent } from './components/principal/principal.component';

const adminImportExport = [AsideComponent, PrincipalComponent];

@NgModule({
  imports: [CommonModule, adminImportExport, CoreModule],
  exports: [adminImportExport]
})
export class AdministrationModule { }
