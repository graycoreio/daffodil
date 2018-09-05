import { NgModule } from '@angular/core';

import { TemplateComponent } from './template/template.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DaffSidebarModule } from '../../design/molecules/sidebar/sidebar.module';

@NgModule({
  imports: [
    RouterModule,
    HeaderModule,
    SidebarModule,
    DaffSidebarModule
  ],
  declarations: [
    TemplateComponent
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
