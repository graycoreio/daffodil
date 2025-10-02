import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { DaffRouterNamedViewOutletModule } from '@daffodil/router';

import { TemplateComponent } from './template.component';
import { DaffioSidebarViewportContainer } from '../sidebar/containers/sidebar-viewport/sidebar-viewport.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    DaffRouterNamedViewOutletModule,
    DaffioSidebarViewportContainer,
  ],
  declarations: [
    TemplateComponent,
  ],
  exports: [
    TemplateComponent,
  ],
})
export class TemplateModule { }
