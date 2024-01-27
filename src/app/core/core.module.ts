import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { NavComponent } from './components/nav/nav.component';

const coreImportExport = [HeaderComponent, AsideComponent, FooterComponent, NavComponent];

@NgModule({
  imports: [
    CommonModule,
    coreImportExport
  ],
  exports: [
    coreImportExport
  ]
})
export class CoreModule { }
