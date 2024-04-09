import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { PostComponent } from './components/post/post.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';

const homeImportExport = [PrincipalComponent, PostComponent, PostComponent, SobreComponent];

@NgModule({
  imports: [CommonModule, homeImportExport, CoreModule, RouterModule],
  exports: [homeImportExport],
})
export class HomeModule { }
