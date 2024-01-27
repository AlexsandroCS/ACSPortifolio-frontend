import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjetcComponent } from './project/projetc.component';
import { CoreModule } from '../core/core.module';

const pagesImportExport = [HomeComponent, ProjetcComponent]

@NgModule({
  imports: [
    CommonModule,
    pagesImportExport,
    CoreModule
  ],
  exports: [
    pagesImportExport
  ]
})
export class PagesModule { }
