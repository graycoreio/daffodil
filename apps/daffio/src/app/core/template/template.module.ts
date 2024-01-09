import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { TemplateComponent } from './template.component';
import { DaffioFooterModule } from '../footer/footer.module';
import { DaffRouterNamedViewOutletModule } from '@daffodil/router';
import { DaffioSidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    DaffioSidebarModule,
    DaffioFooterModule,
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
