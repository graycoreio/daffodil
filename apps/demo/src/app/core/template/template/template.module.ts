import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule } from '@daffodil/design/sidebar';

import { TemplateComponent } from './template.component';
import { NewsletterComponent } from '../../../newsletter/newsletter.component';
import { FooterModule } from '../../footer/footer.module';
import { HeaderModule } from '../../header/header.module';
import { SidebarModule } from '../../sidebar/sidebar.module';

@NgModule({
  imports: [
    RouterModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
    DaffSidebarModule,
    NewsletterComponent,
  ],
  declarations: [
    TemplateComponent,
  ],
  exports: [
    TemplateComponent,
  ],
})
export class TemplateModule { }
