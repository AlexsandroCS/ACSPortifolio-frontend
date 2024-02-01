import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProjectComponent } from './components/project/project.component';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';

const moduleImportExport = [PrincipalComponent, ProjectComponent];

@NgModule({
  imports: [CommonModule, moduleImportExport, CoreModule, RouterModule],
  exports: [moduleImportExport],
})
export class HomeModule { }
