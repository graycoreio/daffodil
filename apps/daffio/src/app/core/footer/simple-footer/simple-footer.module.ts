import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffLogoModule,
  DaffCopyrightModule,
} from '@daffodil/branding';
import { DaffCalloutModule } from '@daffodil/design/callout';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioSimpleFooterComponent } from './simple-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,

    DaffCalloutModule,
    DaffContainerModule,
    DaffLogoModule,
    DaffCopyrightModule,
  ],
  declarations: [
    DaffioSimpleFooterComponent,
  ],
  exports: [
    DaffioSimpleFooterComponent,
  ],
})
export class DaffioSimpleFooterComponentModule {}
