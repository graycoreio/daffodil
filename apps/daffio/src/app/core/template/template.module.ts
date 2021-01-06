import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TemplateComponent } from './template.component';
import { DaffioHeaderModule } from '../header/header.module';
import { DaffioSidebarModule } from '../sidebar/sidebar.module';
import { DaffioFooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    DaffioHeaderModule,
    DaffioSidebarModule,
    DaffioFooterModule
  ],
  declarations: [
    TemplateComponent
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
