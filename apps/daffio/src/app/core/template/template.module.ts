import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { TemplateComponent } from './template.component';
import { DaffioFooterModule } from '../footer/footer.module';
import { DaffioHeaderModule } from '../header/containers/header.module';
import { DaffioSidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    DaffioHeaderModule,
    DaffioSidebarModule,
    DaffioFooterModule,
  ],
  declarations: [
    TemplateComponent,
  ],
  exports: [
    TemplateComponent,
  ],
})
export class TemplateModule { }
