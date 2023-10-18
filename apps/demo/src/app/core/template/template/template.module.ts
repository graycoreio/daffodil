import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule } from '@daffodil/design';

import { TemplateComponent } from './template.component';
import { NewsletterModule } from '../../../newsletter/newsletter.module';
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
    NewsletterModule,
  ],
  declarations: [
    TemplateComponent,
  ],
  exports: [
    TemplateComponent,
  ],
})
export class TemplateModule { }
