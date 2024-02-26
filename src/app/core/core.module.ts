import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { NavComponent } from './components/nav/nav.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { HeaderTwoComponent } from './components/header-two/header-two.component';

const coreImportExport = [HeaderComponent, AsideComponent, FooterComponent, NavComponent, NewPostComponent, HeaderTwoComponent];

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
