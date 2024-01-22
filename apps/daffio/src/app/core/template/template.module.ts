import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { DaffRouterNamedViewOutletModule } from '@daffodil/router';

import { TemplateComponent } from './template.component';
import { DaffioSidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    DaffioSidebarModule,
    DaffRouterNamedViewOutletModule,
  ],
  declarations: [
    TemplateComponent,
  ],
  exports: [
    TemplateComponent,
  ],
})
export class TemplateModule { }
