import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule } from '@daffodil/design';

import { TemplateComponent } from './template/template.component';
import { HeaderModule } from '../header/header.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { FooterModule } from '../footer/footer.module';
import { NewsletterModule } from '../../newsletter/newsletter.module';
import { ModalPortalComponent } from './portals/modal-portal.component';

@NgModule({
  imports: [
    RouterModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
    DaffSidebarModule,
    NewsletterModule
  ],
  declarations: [
    TemplateComponent,
    ModalPortalComponent
  ],
  exports: [
    TemplateComponent,
    ModalPortalComponent
  ]
})
export class TemplateModule { }
