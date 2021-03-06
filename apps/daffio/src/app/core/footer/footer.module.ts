import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffLogoModule,
  DaffCopyrightModule,
} from '@daffodil/branding';
import {
  DaffCalloutModule,
  DaffListModule,
  DaffButtonSetModule,
  DaffButtonModule,
  DaffContainerModule,
  DaffInputModule,
} from '@daffodil/design';

import { DaffioNewsletterModule } from '../../newsletter/newsletter.module';
import { DaffioSimpleFooterComponent } from './simple-footer/simple-footer.component';
import { DaffioSubFooterComponent } from './sub-footer/sub-footer.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffCalloutModule,
    DaffListModule,
    DaffButtonModule,
    DaffButtonSetModule,
    DaffContainerModule,
    DaffInputModule,
    DaffLogoModule,
    DaffCopyrightModule,
    DaffioNewsletterModule,
    FontAwesomeModule,
  ],
  declarations: [
    DaffioSimpleFooterComponent,
    DaffioSubFooterComponent,
  ],
  exports: [
    DaffioSimpleFooterComponent,
    DaffioSubFooterComponent,
  ],
})
export class DaffioFooterModule {}
