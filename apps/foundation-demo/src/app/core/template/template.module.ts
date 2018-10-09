import { NgModule } from '@angular/core';

import { TemplateComponent } from './template/template.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DaffSidebarModule } from '../../design/molecules/sidebar/sidebar.module';
import { FooterModule } from '../footer/footer.module';
import { DaffNewsletterModule } from '../../newsletter/newsletter.module';

@NgModule({
  imports: [
    RouterModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
    DaffSidebarModule,
    DaffNewsletterModule
  ],
  declarations: [
    TemplateComponent
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
